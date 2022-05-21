$(document).ready(function () {
    $(".player").draggable({
        revert: true
    })
    $(".ball").droppable({
        accept: ".player",
        drop: function () {
            var arr = $(".d")
            var i = 0
            if (arr.length < 4) {
                $('<img>',
                    {
                        class: "d",
                        src: 'football.png',
                        width: 100,
                        height: 100
                    }
                ).appendTo($('.ball'));
                i++
            }

        }

    })


})
