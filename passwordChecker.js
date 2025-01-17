
export class PasswordChecker{
    
    passLongEnought(password){
        return password.length >= 8;
    }

    passHasIPL(password){
        password.toLowerCase();
        if(password.search("ipl")){
            return true;
        }
        return false;
    }

    

}
