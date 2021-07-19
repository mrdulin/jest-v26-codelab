registry=$(npm get registry);

if [ $registry != "https://registry.npmjs.org/" ];
then 
    echo 'npm registry is not official'; 
    exit 1;
fi