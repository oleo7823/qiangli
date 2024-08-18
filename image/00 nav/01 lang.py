import random
# import wordcloud
data = open("./01 lang.txt", "r", encoding="utf-8")
lines = data.readlines()

dic = {}
for line in lines[1:]: 
    line = line.rstrip().split("\t")
    lang = line[0]
    num = line[1]
    fam = line[2]
    brc = line[3]
    script = line[4]
    dic[script] = num

print(dic)    
