import React, { useEffect, useState } from 'react'
import { ScrollView, Text, ToastAndroid, View } from 'react-native'
import MYButton from '../components/MYButton'
import MYTextInput from '../components/MYTextInput'
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import styles from './style'

export default function BookingScreen({ navigation, route }) {
    let [model, setModel] = useState({})
    let [userId, setUserId] = useState('')
    let obj = route.params
    console.log(obj)

    let checkUser = () => {
        const user = auth().currentUser;
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            // ...
            var uid = user.uid;
            console.log(uid)
            setUserId(uid)
        } else {
            // No user is signed in.
        }
    }
    let bookVehicle = () => {
        console.log(model)
        model.userId = userId
        model.vehicleDetails = obj
        model.id = database().ref('bookings').push().key
        database()
            .ref(`bookings/${model.id}`)
            .set(model)
            .then(() => { ToastAndroid.show("Registerd Successfully", ToastAndroid.SHORT) })
    }
    useEffect(() => {
        checkUser()
    }, [])
    return (<View style={[styles.h100, styles.p2, { backgroundColor: "#F6F7FB" }]}>
        {/* Passenger Details */}
        <ScrollView style={[styles.rounded, styles.mb2]}>

            <Text style={[styles.textBlack, styles.fs3, styles.textBold, styles.m1]}>Passenger Details</Text>
            <View style={[styles.bgDanger, styles.p1, styles.rounded, styles.pb2, styles.mb3]}>
                <Text style={[styles.textWhite, styles.fs6, styles.textBold, styles.m1]}>Name</Text>
                <MYTextInput label="Name" onChangeText={e => { setModel({ ...model, passengerName: e }) }} />
                <Text style={[styles.textWhite, styles.fs6, styles.textBold, styles.m1]}>Contact</Text>
                <MYTextInput label="Contact" keyboardType="phone-pad" onChangeText={e => { setModel({ ...model, passengerContact: e }) }} />
                <Text style={[styles.textWhite, styles.fs6, styles.textBold, styles.m1]}>Cnic</Text>
                <MYTextInput label="Cnic" keyboardType="numeric" onChangeText={e => { setModel({ ...model, passengerCnic: e }) }} />
                <Text style={[styles.textWhite, styles.fs6, styles.textBold, styles.m1]}>Pickup Address</Text>
                <MYTextInput label="Pickup Address" onChangeText={e => { setModel({ ...model, pickupAddress: e }) }} />
                <Text style={[styles.textWhite, styles.fs6, styles.textBold, styles.m1]}>Drop Address</Text>
                <MYTextInput label="DropOff Address" onChangeText={e => { setModel({ ...model, dropAddress: e }) }} />
            </View>

            {/* Driver Details */}

            <Text style={[styles.textBlack, styles.fs3, styles.textBold, styles.m1]}>Driver Details</Text>
            <View style={[styles.bgDanger, styles.p1, styles.rounded, styles.pb2, styles.mb3]}>
                <Text style={[styles.textWhite, styles.fs6, styles.textBold, styles.m1]}>Driver Name</Text>
                <MYTextInput label="Driver Name" editable={false} value={obj.driverName} />
                <Text style={[styles.textWhite, styles.fs6, styles.textBold, styles.m1]}>Driver Contact</Text>
                <MYTextInput label="Driver Contact" editable={false} value={obj.driverContact} />
                <Text style={[styles.textWhite, styles.fs6, styles.textBold, styles.m1]}>Vehicle Name</Text>
                <MYTextInput label="Vehicle Name" editable={false} value={obj.vehicleName} />
                <Text style={[styles.textWhite, styles.fs6, styles.textBold, styles.m1]}>Vehicle Name</Text>
                <MYTextInput label="Vehicle Number" editable={false} value={obj.vehicleNumber} />
            </View>
            {/* Travelling Details */}
            <Text style={[styles.textBlack, styles.fs3, styles.textBold, styles.m1]}>Travelling Details</Text>
            <View style={[styles.bgDanger, styles.p1, styles.rounded, styles.pb2, styles.mb3]}>
                {/* <Text style={[styles.textWhite, styles.fs6, styles.textBold, styles.m1]}>Start of Destination</Text>
            <MYTextInput label="Start of Destination" editable={false} value={obj.startPoint} />
            <Text style={[styles.textWhite, styles.fs6, styles.textBold, styles.m1]}>End of Destination</Text>
        <MYTextInput label="End of Destination" editable={false} value={obj.endPoint} /> */}
                <Text style={[styles.textWhite, styles.fs6, styles.textBold, styles.m1]}>Time</Text>
                <MYTextInput label="Timing" editable={false} value={obj.time} />
                <Text style={[styles.textWhite, styles.fs6, styles.textBold, styles.m1]}>Price</Text>
                <MYTextInput label="Price" editable={false} value={obj.price} />
            </View>
        </ScrollView>
        <View style={[]}>
            <MYButton label="Confirm Booking" onPress={bookVehicle}/>
        </View>
    </View>

    )
}
