// Simple Javascript JS solution,  faster than 56.02% of JavaScript online submissions for Power of Two.

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) 
{
    var bool=false;
    
    for(var i=0; i<31; i++)
    {
        if(Math.pow(2, i) == n)
        {
            bool=true;
            return bool;
        }
    }
    return bool;
};