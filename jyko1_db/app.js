import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const App = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://<백엔드 서버 IP>:4000/api/users');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <View>
            <Text>사용자 목록:</Text>
            {users.map(user => (
                <Text key={user._id}>{user.username}</Text>
            ))}
        </View>
    );
};

export default App;