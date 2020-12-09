# Test task - One armed bandit

The most common layout for slot machines is 3x5, having 5 columns and 3 rows. 

i.e:
```
0 3 2 1 3
4 1 2 0 1
4 2 1 3 1
``` 

## 1. Make a simple slot machine, that prints out 15 numbers in 3 rows, each number randomly selected from 0 to 4, with equal probability. Log the result to the console.

## 2. This slot machine pays, when at least three numbers match consecutively, starting from the first number of the left side, on any row.

i.e: A win on the first row.
```
2 2 2 1 4
0 2 4 1 0
0 0 4 2 1
```

where the winning positions are:
```
x x x 1 4
0 2 4 1 0
0 0 4 2 1
```

i.e this is *NOT* a win:
```
1 1 2 2 2
2 0 0 0 0
1 3 3 3 4
```
Roll a random outcome. Log to the console if there was a win on any of the three rows.

## 3. The game pays on each row the following way:
If there was a valid win on a row, it pays `i * (s + 0.5)`$, where `i` is the number of consecutive matching numbers from left to right, and `s` is the value of the matching number. Each spin costs the player 1$.

i.e
```
2 2 2 1 3
1 2 3 1 4
1 1 1 1 4
```

pays 3 * 2.5 + 4 * 1.5 = 13.5

Estimate if it is worth offering this slot machine as a casino. What if the payout was `i * (s + 0.6)`$?
 
## 4* Bonus math:
What is the exact value of the average payout of this slot machine?