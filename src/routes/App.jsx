import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import PasswordRecovery from '@pages/PasswordRecovery';
import useInitialState from '@hooks/useInitialState';
import CreateAccount from '@pages/CreateAccount';
import NewPassword from '@pages/NewPassword';
import EditAccount from '@pages/EditAccount';
import AppContext from '@context/AppContext';
import EmailSend from '@pages/EmailSend';
import Layout from '@containers/Layout';
import NotFound from '@pages/NotFound';
import Checkout from '@pages/Checkout';
import Login from '@pages/Login';
import Orders from '@pages/Orders';
import Home from '@pages/Home';
import '@styles/global.css';

const App = () => {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route exact path="/login" element={<Login/>} />
                        <Route exact path="/signup" element={<CreateAccount/>} />
                        <Route exact path="/account" element={<EditAccount/>} />
                        <Route exact path="/new-password" element={<NewPassword/>} />
                        <Route exact path="/recovery-password" element={<PasswordRecovery/>} />
                        <Route exact path="/email-send" element={<EmailSend/>} />
                        <Route exact path="/orders" element={<Orders/>} />
                        <Route exact path="/checkout" element={<Checkout/>} />
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;