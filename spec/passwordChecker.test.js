import { PasswordChecker } from "../passwordChecker";

describe("password tests", function() {
    const checker = new PasswordChecker;

    const wrong = "passipl";
    
    const correct = "Password1!";

    it(" ", function() {
        const result = checker.passLongEnought(wrong);
        expect(result).toBe(false);
    });

    it(" ", function() {
        const result = checker.passLongEnought(correct);
        expect(result).toBe(true);
    });
})
