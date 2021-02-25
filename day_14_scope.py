class Difference:
    def __init__(self, a):
        self.__elements = a

    # Add your code here
    def __init__(self, __element):
        self.__elements = a
        
    def computeDifference(self):
        self.maximumDifference = max(a) - min(a)
        

# End of Difference class

_ = input()
a = [int(e) for e in input().split(' ')]

d = Difference(a)
d.computeDifference()

print(d.maximumDifference)