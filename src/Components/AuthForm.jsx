import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Box, Button } from '@chakra-ui/react';
import { supabase } from '../Supabase/SupaClient';
import { SignUpNewUser } from '../Functions/SupaAuth';
const Form = ({ handleSignUp }) => {
    const [Fname, setFName] = useState("");
    const [Lname, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [value, setValue] = useState({});
    const handleSubmit = async (e) => {
        e.preventDefault()
        setValue({
            Fname: Fname,
            Lname: Lname,
            email: email,
            password: password
        });
        setFName("");
        setLName("");
        setEmail("");
        setPassword("");
        handleSignUp(value.email, value.password)
    }
    useEffect(() => {
        console.log(value)
    })
    return (
        <TextBox>
            <Box className="container">
                <Box className="heading"></Box>
                <form className="form" action>
                    <Box className="input-field">
                        <input required autoComplete="off"
                            type="text"
                            name="text"
                            id="username"
                            onChange={(e) => { setFName(e.target.value) }}
                            value={Fname}
                        />
                        <label htmlFor="username">First Name</label>
                    </Box>
                    <Box className="input-field">
                        <input required autoComplete="off"
                            type="text"
                            name="text"
                            id="username"
                            onChange={(e) => { setLName(e.target.value) }}
                            value={Lname}
                        />
                        <label htmlFor="username">Last Name</label>
                    </Box>
                    <Box className="input-field">
                        <input required autoComplete="off" type="email" name="email" id="email"
                            onChange={(e) => { setEmail(e.target.value) }} value={email} />
                        <label htmlFor="email">Email</label>
                    </Box>
                    <Box className="input-field">
                        <input required autoComplete="off" type="password" name="text" id="password"
                            onChange={(e) => { setPassword(e.target.value) }} value={password} />
                        <label htmlFor="username">Password</label>
                    </Box>
                    <Box className="btn-container">
                        <Button colorScheme='teal' variant='outline'
                            onClick={(e) => handleSubmit(e)}
                        >
                            Submit
                        </Button>
                    </Box>
                </form>
            </Box>
        </TextBox>
    );
}

const TextBox = styled.div`
  .container {
    border: solid 1px #8d8d8d;
    padding: 20px;
    border-radius: 20px;
    background-color: #fff;
    display:flex;
    flex-Direction:column;
    justify-Content:center;
    align-Items:center;
    height:500px
  }

  .container .heading {
    font-size: 1.3rem;
    margin-bottom: 20px;
    font-weight: bolder;
  }

  .form {
    max-width: 300px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .form .btn-container {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .form .btn {
    padding: 10px 20px;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 3px;
    border-radius: 10px;
    border: solid 1px #1034aa;
    border-bottom: solid 1px #90c2ff;
    background: linear-gradient(135deg, #0034de, #006eff);
    color: #fff;
    font-weight: bolder;
    transition: all 0.2s ease;
    box-shadow: 0px 2px 3px #000d3848, inset 0px 4px 5px #0070f0,
      inset 0px -4px 5px #002cbb;
  }

  .form .btn:active {
    box-shadow: inset 0px 4px 5px #66B2B2, inset 0px -4px 5px #66B2B2;
    transform: scale(0.995);
  }

  .input-field {
    position: relative;
  }

  .input-field label {
    position: absolute;
    color: #8d8d8d;
    pointer-events: none;
    background-color: transparent;
    left: 15px;
    transform: translateY(0.6rem);
    transition: all 0.3s ease;
  }

  .input-field input {
    padding: 10px 15px;
    font-size: 1rem;
    border-radius: 8px;
    border: solid 1px #8d8d8d;
    letter-spacing: 1px;
    width: 100%;
  }

  .input-field input:focus,
  .input-field input:valid {
    outline: none;
    border: solid 1px #66B2B2;
  }
  .input-field input:focus ~ label,
  .input-field input:valid ~ label {
    transform: translateY(-51%) translateX(-10px) scale(0.8);
    background-color: #fff;
    padding: 0px 5px;
    color: #66B2B2;
    font-weight: bold;
    letter-spacing: 1px;
    border: none;
    border-radius: 100px;
}
  .form .passicon {
    cursor: pointer;
    font-size: 1.3rem;
    position: absolute;
    top: 6px;
    right: 8px;
  }

  .form .close {
    display: none;
  }`;
const signinButton = styled.div`
  .animated-button {
    position: relative;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 16px 36px;
    border: 4px solid;
    border-color: transparent;
    font-size: 16px;
    background-color: ;
    border-radius: 100px;
    font-weight: 600;
    color: #1f387e;
    box-shadow: 0 0 0 2px #ffffff;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .animated-button svg {
    position: absolute;
    width: 24px;
    fill: #1f387e;
    z-index: 9;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .animated-button .arr-1 {
    right: 16px;
  }

  .animated-button .arr-2 {
    left: -25%;
  }

  .animated-button .circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background-color: #c5e5e4;
    border-radius: 50%;
    opacity: 0;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .animated-button .text {
    position: relative;
    z-index: 1;
    transform: translateX(-12px);
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .animated-button:hover {
    box-shadow: 0 0 0 12px transparent;
    color: #212121;
    border-radius: 12px;
  }

  .animated-button:hover .arr-1 {
    right: -25%;
  }

  .animated-button:hover .arr-2 {
    left: 16px;
  }

  .animated-button:hover .text {
    transform: translateX(12px);
  }

  .animated-button:hover svg {
    fill: #1f387e;
  }

  .animated-button:active {
    scale: 0.95;
    box-shadow: 0 0 0 4px greenyellow;
  }

  .animated-button:hover .circle {
    width: 220px;
    height: 220px;
    opacity: 1;
  }`;
export default Form;
