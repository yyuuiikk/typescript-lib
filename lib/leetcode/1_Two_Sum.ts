// todo: 時間がかかりすぎるので最適化の方法を考える
function twoSum(nums: number[], target: number): number[] {
    let answer: number[] = [];

    const lastIdx = nums.length - 1;
    for (let i = 0; i < nums.length; i++) {
        let isOk: boolean = false;
        if (i === lastIdx) {
            break;
        }

        answer = [i];
        let tmp = nums[i];
        let nextIdx = i + 1;
        while (lastIdx >= nextIdx) {
            let flowIdx = nextIdx;
            while(lastIdx >= flowIdx) {
                tmp += nums[flowIdx];
                if (tmp === target) {
                    isOk = true;
                    answer.push(flowIdx);
                    break;
                } else {
                    tmp = nums[i];
                }
                flowIdx++;
            }
            if (isOk) {
                break;
            }
            nextIdx++;
            tmp = nums[i];
            answer = [i];
        }
        if (isOk) {
            break;
        }
    }
    return answer;
};

// const nums = [3, 2, 3];
// const nums = [3,2,4];
// const target = 6;
// const nums = [0,4,3,0];
// const target = 0;
const nums = [1,1,1,1,1,4,1,1,1,1,1,7,1,1,1,1,1];
const target = 11;


console.log(twoSum(nums, target));