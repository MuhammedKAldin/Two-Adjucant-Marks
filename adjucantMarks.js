function solution(S) {
    let charSet = ["a","b","ab"];
    let arr = [];
    let questionMark = 0;

    for(let i = 0; i < S.length; i++)
    {
        if(S[i] == '?' && S[i+1] != '?')
        {
            arr.push(loopAroundABs());
            questionMark += 1;
            
        } else {
            arr.push(S[i]);
        }
    }
    
    function loopAroundABs()
    { 
        return charSet[questionMark];
    }

    function streak(arr) {
        var i,
            temp,
            streak,
            length = arr.length,
            highestStreak = 0;
    
        for(i = 0; i < length; i++) {
            // check the value of the current entry against the last
            if(temp != '' && temp == arr[i]) {
                // it's a match
                streak++;
            } else {
                // it's not a match, start streak from 1
                streak = 1;
            }
    
            // set current letter for next time
            temp = arr[i];
    
            // set the master streak var
            if(streak > highestStreak) {
                highestStreak = streak;
            }
        }
    
        return highestStreak;
    }
    return streak(arr);
}

S = "aa??bbb";
console.log(solution(S));
