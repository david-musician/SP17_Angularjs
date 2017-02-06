#!/bin/bash  
git add .  
read -p "Commit description: " desc  
git commit -am "$desc"  
git push origin master