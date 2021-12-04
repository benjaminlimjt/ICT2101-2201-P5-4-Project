new Sortable(document.getElementById('sourceCode_container'), {
    group: {
        name: 'code',
        pull: 'clone',
        put: false
    },
    sort: false,
    animation: 150,
    ghostClass: 'bg-info'
})

new Sortable(document.getElementById('inputCode_container'), {
    group: {
        name: 'code',
    },
    animation: 150,
    ghostClass: 'text-info',
    swap: true,
    swapClass: 'myswap',
    removeOnSpill: true
})

