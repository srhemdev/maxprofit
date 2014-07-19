maxprofit
=========

Stakeout Problem

Congratulations!  You are the new elite hacker in a group of villainous ne'er-do-wells.

Luckily this group is more saavy than your last band of ruffians, and they are looking to software (and you) to improve their take. The con man for the team, has gone door-to-door down each street posing as a termite inspector so he could covertly total the valuable goods in each house. Normally the gang would just rob all the valuable homes, but there's a catch! Whenever a house is robbed in this wealthy neighborhood, the police watch it and the neighboring houses for months.

So the gang can't simply rob all the homes, and if they choose to rob one, they can no longer rob the house on either side of it.

The ringleader wants to know what houses he should rob to maximize the team's profit, and he wants to know now. Write a function that takes in an array of positive integers (home values) and returns the maximum expected value of robbing that street.

For example:

[ 20, 10, 50, 5, 1 ] should return $71, as robbing the first, third, and fifth houses is optimal [ 20, x, 50, x, 1 ]

[ 20, 50, 10, 1, 5 ] should return $55, as robbing the second and fifth houses is optimal [ x, 50, x, x, 5 ]
