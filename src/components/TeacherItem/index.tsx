import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { View, Image, Text } from 'react-native';
import styles from './styles';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

function TeacherItem() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image 
                    style={styles.avatar}
                    source={{ uri: 'http://github.com/oricardos.png' }}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Luiz Ricardo Silva</Text>
                    <Text style={styles.subject}>Música</Text>
                </View>
            </View>

            <Text style={styles.bio}>
                Entusiasta dos rítmos brasileiros.
                {'\n'}{'\n'}
                Apaixonado por música desde cedo, comecei com o violão, depois aprendi o baixo, e depois bateria e guitarra. Multi-instrumentista... sei um pouco de cada ( da pra quebrar um galho 🤷‍♂️).
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'  '}
                    <Text style={styles.priceValue}>R$50,00</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        {/* <Image source={heartOutlineIcon} /> */}
                        <Image source={unfavoriteIcon} />
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}

export default TeacherItem;