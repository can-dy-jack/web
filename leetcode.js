//  1.两数相加
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    for(let i = 0;i<nums.length;i++){
        for(let j = i+1;j<nums.length;j++){
            if( target == nums[i] + nums[j]){
               return [i,j];
            }
        }
    }
};
// 测试 
// console.log(twoSum([3,2,4],6));


// 2、两数相加

// 3、数字反转
/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    var reverseNum = '',isFu = false;
    if(x == 0){
       return 0;
    }
    if(x<0){
        x = -x;
        isFu = true;
    }
    var temp = 0;
    while(x>0){
        temp = x%10;
        x = parseInt(x/10);
        reverseNum += temp;
    }
    if(parseInt(reverseNum)<Math.pow(2,31)-1 && parseInt(reverseNum)>-Math.pow(2,31)){
        console.log(parseInt(reverseNum)<Math.pow(2,31)-1);
        if(isFu){
            return -parseInt(reverseNum);
        }else{
            return parseInt(reverseNum);
        }
    }
    else{
        return 0;
    }
};

// 20、有效的括号
/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    var a = '()',m = '[]',l = '{}';
    for(let i =0; i<5000;i++){
            s = s.replace(a,'').replace(m,'').replace(l,'');
    }
    return s;
    // return s == '';
};

console.log(isValid("([[][]{({}({}))}])"));
