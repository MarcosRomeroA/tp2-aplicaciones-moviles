import React, { useState } from 'react'
import { View, Text, Button, TextInput } from 'react-native';

export const AnimeScreen = () => {

    const [ animeInfo, setAnimeInfo ] = useState([]);

    const [ input, setInput ] = useState([]);

    const getAnimeInfo = async (anime) => {

        anime = anime.toLowerCase().replace(/ /g,"_");

        fetch(`https://anime-facts-rest-api.herokuapp.com/api/v1/${anime}`)
            .then(async (res) => {
                if(res.ok)
                {
                    let facts = await res.json();
                    setAnimeInfo(facts.data);
                }
                else
                {
                    setAnimeInfo(false);
                    console.error('No se encontro el anime');
                }
            })
            .catch(e => {
                console.error(`Exception: ${e}`)
            })
    }

    return (
        <View style={{
            flex:1 
        }}>
            <View style={{marginTop: 10}}>   
                <View style={{marginLeft:15}}>
                    <Text  
                        style={{ 
                            justifyContent: 'center', 
                            alignContent:'center', 
                            fontSize:40,
                            fontWeight:'bold', 
                            marginBottom: 50
                        }}>
                        Hechos del anime:
                    </Text>
                </View>
                <View
                    style={{
                        height:380,
                        marginLeft:10,
                        marginRight: 10
                    }}
                >  
                    <TextInput
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ingrese un anime, ej: 'Naruto'"
                        keyboardType="text"
                        style={{marginBottom:"20px"}}
                    >
                    </TextInput>
                    <Button  
                        
                        title="Buscar"
                        onPress={() => getAnimeInfo(input)}
                    />
                    <View>
                        <Text style={{fontSize:20, marginTop:20}}>
                            Hechos de: {input}
                        </Text>
                    </View>  
                    <View>
                        {   
                            animeInfo ? 
                            animeInfo.slice(0,5).map((info) => 
                                (
                                    <Text style={{marginTop:"20px", width:"300px    "}} key={info.fact_id}> { info.fact } </Text>  
                                )
                            )
                            : <Text  style={{marginTop:"20px"}}>No se encontro ningun resultado para esta busqueda</Text>
                        }
                    </View>        
                </View>
            </View>    
        </View>
    )
}

