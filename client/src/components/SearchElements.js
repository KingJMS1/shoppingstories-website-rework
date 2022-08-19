import styled from 'styled-components'
import { useState } from 'react'

const Container = styled.div`
    margin-top: -60px;
    margin-left: 0;
    margin-right: 0;
    background: #f6f1cb;
    display: block;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
`
const SearchBox = styled.div`
    margin-top: 90px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    position: relative;
    background-color: #283618; 
    width: 80%;
    height: 180px;
    border-radius: 5px;
    box-shadow: 0 4px 8px 5px rgba(0, 0, 0, 0.2), 0 15px 20px 5px rgba(0, 0, 0, 0.19);
    overflow: hidden;

    .basic {
        border-radius: 5px;
        position: absolute;
        width: 80%;
        height: 30px;
        top: 40%;
        left: 10%;
        right: 10%;
        padding-left: 15px;
        font-size: 20px;
        border: 2px solid #000000;
        &:focus{ border: 2px solid #860909; outline: none;}
        &:hover{
            border: 2px solid #860909;
        }
        
    }

    .basicButton {
        border-radius: 5px;
        position: absolute;
        width: 50%;
        height: 35px;
        font-size: 20px;
        font-weight: bolder;
        top: 72%;
        left: 25%;
        right: 25%;
        color: #000000;
        background: #d1d1d1;
        box-shadow: 0 4px 8px 5px rgba(0, 0, 0, 0.2);
        border: 2px solid #000000;

        &:hover{
            border: 1px solid #ffffff;
            background: #b8ac4f;
        }
        &:active{
            border: 1px solid #ffffff;
            background: #b8ac4f;
        }
    }

    .advancedSm {
        border-radius: 5px;
        position: absolute;
        width: 50px;
        height: 20px;
        top: 40%;
        left: 10%;
        right: 10%;
        padding-left: 15px;
        font-size: 25px;

        &:hover{
            border: 2px solid #860909;
        }
    }   
    
    .searchField{
        position: relative;
        /* margin: 5px 0px; */
        padding: 15px;
        margin:15px 0px;

        label{
            position: absolute;
            margin-left: -30px;
            top:15px;
            cursor: text;
        }

        input {
            &:focus + label, &:not(:placeholder-shown) + label{
                opacity:1;
                transform: scale(.9) translateY(-100%) translateX(-10px);
                color:#000;
            }            
            &:focus{
                border:1px solid #000;
                outline-color: #000;
            }
        }

        input{
            width:100px;
            padding-left: 10px;
        }
        label, input{
            transition: all 0.2s;
            transition-timing-function: ease;
            transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
            opacity:0.5;
        }
        
    }
`
const SearchItem = styled.div`
    display: flex;
    position: absolute; 
    width: 100%;
    top: 40%;
    left: 4%;

    label {
        margin:0px 0;
        width: 100%;
        position:relative;
        display:inline-block;
    }
    span {
        padding:4px;
        pointer-events: none;
        position:absolute;
        left:5px;
        top:3px;
        font-size: 15px;
        transition: 0.2s;
        transition-timing-function: ease;
        transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
        opacity:0.5;
    }

    input {
        padding:3px;
        height: 25px;
        width: 15%;
        border-radius: 5px;
        border: 2px solid #000000;
        &:focus{ border: 4px double #b60101;; outline: none;}
        &:hover{ border: 3px solid #b60101;}
    }

    input:focus + span, input:not(:placeholder-shown) + span {
        color: #ffffff;
        opacity:1;
        font-size: 12px;
        transform: translateY(-100%) translateX(-1px);
    }

    /* For IE Browsers*/
    input:focus + span, input:not(:-ms-input-placeholder) + span {
        opacity:1;
        font-size: 10px;
        transform: translateY(-100%) translateX(-30px);
    }
`
const Select = styled.select`

    width: 10%;
    height: 33px;
    padding:3px;
    margin-top: 2px;
    background: white;
    color: gray;
    border-radius: 5px;
    font-size: 15px;
    border: none;
    position:relative;
    &:focus{ border: 4px double #b60101; outline: none;}
    &:hover{ border: 3px solid #b60101;}
    
    option {
        color: black;
        background: white;
        display: flex;
        white-space: pre;
        min-height: 25px;
        padding: 0px 2px 1px;
        &:focus + span, &:not(:placeholder-shown) + span {
        color: #ffffff;
        opacity:1;
        font-size: 12px;
        transform: translateY(-100%) translateX(-1px);
    }
    }

    span {
        padding:4px;
        pointer-events: none;
        position:absolute;
        left:5px;
        top:3px;
        font-size: 15px;
        transition: 0.2s;
        transition-timing-function: ease;
        transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
        opacity:0.5;
    }

        
`

const SearchResults = styled.div`
    width: 90%;
    height: 64%;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    background: #f7f7f7;
    overflow: auto;
    border-radius: 5px;
    box-shadow: 0 4px 8px 5px rgba(0, 0, 0, 0.2), 0 15px 20px 5px rgba(0, 0, 0, 0.19);
`
const SearchButtons = styled.div`
    height: 30px;
    padding: 0;
    width: 75%;
    position: absolute;
    top: 20px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2; 

    input {
        display: none;

        &:checked:not(.active) + label{
            background-color: #b8ac4f;
            color: white;
            /* border: 1px solid #000000; */
        }
    }

    label {
        color: #ffffff;
        background: #51633d;
        float: left;
        height: 20px;
        text-decoration: none;
        text-align: center;
        border: 2px solid #000000;
        font-size: 15px;
        font-weight: bold;
        width: 33%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;

        &:hover:not(.active) {
            background-color: #ddd;
            color: #000000;
        }

        &:nth-child(2) {
            border-radius: 5px;
            margin-right: 10px;
            box-shadow: 0 4px 8px 5px rgba(0, 0, 0, 0.2);
        }
        &:nth-child(4) {
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
            box-shadow: 0 4px 8px 5px rgba(0, 0, 0, 0.2);
            clip-path: inset(-20px 0px -20px -20px);
        }
        &:last-child {
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
            box-shadow: 0 4px 8px 5px rgba(0, 0, 0, 0.2);
            clip-path: inset(-20px -20px -20px 0);
        }
    }
`
const ButtonLabels = styled.div`
    height: 30px;
    padding: 0;
    width: 75%;
    margin-left: auto;
    margin-right: auto;
    box-sizing: border-box;
    z-index: 2; 
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    grid-template-areas: 'col1 col2 col2';

    span {
        color: #ffffff;
        height: 20px;
        text-align: center;
        font-size: 15px;
        font-weight: bold;
        z-index: 4;

    }

    .box{
        grid-area: col2;
        height: 30px;
        border: 3px solid #ffffff;
        border-radius: 5px;
        margin-top: 17px;
        margin-right: -5px;
        margin-left: 2px;
        box-sizing: content-box;
        justify-content: center;
        align-items: center;
        z-index: 3;
    }
`

const SearchElements = () => {
    const [basic, setBasic] = useState(true);
    const [itemsAdv, setItemsAdv] = useState(false);
    const [tobacAdv, setTobacAdv] = useState(false);
    
    const BasicSearch = () => (
        <div>
            <input type="text" className='basic' placeholder='Search'/>
            <button type='button' className='basicButton'>Search</button>
        </div>
    )
    
    const AdvancedItem = () => (

        <SearchItem style={{left: '60%'}}>
            <Select>
               
                    <span>Per Order</span>
                    <option value="" hidden>Per Order</option>
                    <span>Per Order</span>
                    <option value="1">True</option>
                    <span>True</span>
                    <option value="2">False</option>
                    <span>False</span>
                    <option value="3"> </option>
              
            </Select>
        </SearchItem>
        
    )
    // 4+19+1.5+10
    const AdvancedTobacco = () => (
        <>
            <SearchItem>
                <label>
                    <input type="text" placeholder=" " />
                    <span>Item Name</span>
                </label>
            </SearchItem>
            <SearchItem style={{left: '20.5%'}}>
                <label>
                    <input type="text" style={{width: '10%'}} placeholder=" " />
                    <span>Category</span>
                </label>
            </SearchItem>
            <SearchItem style={{left: '32%'}}>
                <label>
                    <input type="text" style={{width: '10%'}} placeholder=" " />
                    <span>SubCategory</span>
                </label>
            </SearchItem>
            <SearchItem style={{left: '43.5%'}}>
                <label>
                    <input type="text" style={{width: '15%'}} placeholder=" " />
                    <span>Variants</span>
                </label>
            </SearchItem>
            <SearchItem style={{left: '60%'}}>
                
            </SearchItem>
            </>
    )

    return (
        <Container>
            <SearchBox>
                <ButtonLabels>
                    <div className='box'/>
                    <span style={{gridArea: "col2"}}>Advanced Search</span>
                </ButtonLabels>
                <SearchButtons>
                    <input type="radio" name="buttons" id="item1" onClick={(e) => {setBasic(true); setItemsAdv(false); setTobacAdv(false);}}  defaultChecked />
                    <label htmlFor="item1" >Basic Search</label>
                    <input type="radio" name="buttons" id="item2" onClick={(e) => {setBasic(false); setItemsAdv(true); setTobacAdv(false);}} />
                    <label htmlFor="item2" class='share'>Item</label>
                    <input type="radio" name="buttons" id="item3" onClick={(e) => {setBasic(false); setItemsAdv(false); setTobacAdv(true);}} />
                    <label htmlFor="item3"  class='share'>Tobacco</label>
                </SearchButtons>
                { basic ? <BasicSearch /> : null }
                { itemsAdv ? <AdvancedItem /> : null }
                { tobacAdv ? <AdvancedTobacco /> : null }
            </SearchBox>
            <SearchResults/>
        </Container>
    )
}

export default SearchElements

