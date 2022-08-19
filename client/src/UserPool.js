import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: "us-east-1_9Y3yZ32hL", 
    ClientId:"dolkrlbvb92fsvg2i5f5q1gnu"}

export default new CognitoUserPool(poolData)
