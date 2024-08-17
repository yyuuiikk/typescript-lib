const names = ['foo', 'bar', 'baz'];
names.forEach(function(x) {
    console.log(x.toUpperCase());
});

names.forEach((x) => {
    console.log(x.toUpperCase());
})