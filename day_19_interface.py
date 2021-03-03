class AdvancedArithmetic(object):
    def divisorSum(n):
        raise NotImplementedError

class Calculator(AdvancedArithmetic):
    
    def divisorSum(self, n):
        self.n = n
        divisible_n = []
        
        for i in range(1, n+1):
            if(n % i == 0):
                divisible_n.append(i)
                
            
        return sum(divisible_n)

n = int(input())
my_calculator = Calculator()
s = my_calculator.divisorSum(n)
print("I implemented: " + type(my_calculator).__bases__[0].__name__)
print(s)