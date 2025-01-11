export const palindrome = (s: string) : boolean => {

   if (s.length <= 1){
    return true;
   }

   const char = s[0];
   const lChar = s[s.length - 1];

   if (char !== lChar) {
    return false;
   }

   return  palindrome(s.slice(1, -1));
};
