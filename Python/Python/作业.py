def employees(self, hours : list[int] , target : int )-> int:
        i = 0
        for x in hours:
            if(i < 2):
                print(f"员工{i}工作{hours[i]}小时，不满足要求")
            else:
                print(f"员工{i}工作{hours[i]}小时，满足要求")
        i += i
        return i

def game(self, guess : list[int] , answer : list[int] )-> int:
        sum = 0
        for i in range(len(guess)):
            if(guess[i] == answer[i]):
                sum += 1
        return sum

def squaresum(self, num: list[int])->int:
        sum = 0
        n = len(num)
        for i in range(n):
          if(n % (i+1) == 0):
               sum += num[i]**2 
        return sum

def findnumber(self, nums: list[int])->int:
    sum = 0
    for x in nums:
        ans = 0
        while x:
            x //= 10
            ans += 1
        if(ans % 2 == 0):
            sum += 1
    return sum

def largestattitude(self, gain: list[int])->int:
     ans = 0
     h = 0
     for x in gain:
          h += x
          ans = max(ans , h)
     return ans
def shuffle(self, num : list[int] , n : int)->list[int]:
    ret = []
    for i in range(n):
        ret.appedn(num[i])
        ret.append(num[i+n]) 
    return ret

def buildarray(self, nums : list[int] )->list[int]:
     ans = []
     n = len(nums)
     for i in range(n):
          ans.append( nums[nums[i]])
     return ans

def countpairs(self, num : list[int] , target : int)-> int:
     sum = 0
     for i in range( len(num) ):
          for j in range( i+1, len(num)):
               if( num[i] + num[j] < target ):
                    sum += 1
     return sum

def smallernumber(self, nums : list[int] )->list[int]:
    ret = []
    n = len(nums)
    for i in range(n):
         ret[i] = 0
         for j in range( n ):
              if(i != j ) and ( nums[i] > nums[j] ):
                   ret[i] += 1
    return ret

def countpair(self, num : list[int] , k : int)-> int:
     sum = 0
     n = len(num)
     for i in range ( n ):
        for j in range (i+1, n):
            if( num[i] == num[j]) and ( (i*j) % k == 0 ):
                 sum += 1
     return sum 
          
def repeatedcharacter(self, s: str)-> str:
     has = {}
     for a in s:
          if has.get(a):
               return a
          has[a] = 1
               
def numpair(self, num : list[int] )-> int:
     n = len( num )
     cnt = {}
     ans = 0
     for i in range(n):
         ans += cnt.get( num[i] , 0 )
     return 1

score_list = [10, 20, 30, 40, 5]
count = 0
while True:
     print(score_list[count])
     count += 1
     if (score_list[count] == 5):
          break 
          print("game over")