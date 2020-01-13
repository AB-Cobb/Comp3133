const exercise01 = (str) => {
    ans = "";
    ans += str.charAt(0).toUpperCase();
    for (let i = 1; i < str.length; i++){
        if (str.charAt(i-1) == " "){
            ans += str.charAt(i).toUpperCase();
        } else {
            ans += str.charAt(i);
        }
    }
    return ans;
}

const max = (list) => {
    let largest = list[0];
    for (let i = 1; i < list.length; i++){
        if (list[i] > largest)
            largest = list[i];
    }
    return largest;
}

const right = (str) => {
    if (str.length < 3)
        return str;
    ans = "";
    pivot = str.length - 3;
    ans += str.substring(pivot, str.length);
    ans += str.substring(0,pivot);
    return ans;
}

const angle_Type = (angle) => {
    if (angle < 90)
        return "Acute";
    if (angle == 90)
        return "Right";
    if (angle < 180)
        return "Obtuse";
    return "Straight";
}

const array_max_sum = (arr, k) => {
    let max_sum = 0;
    for (let i = 0; i < k; i++){
        max_sum += arr[i];
    }
    
    for (let i = 1; i <= arr.length - k; i++){
        let tmp_max_sum = 0;
        for (let j = i; j < i + k; j++){
            tmp_max_sum += arr[j];
        }
        if (tmp_max_sum > max_sum)
            max_sum = tmp_max_sum;
    }
    return max_sum;
}