const API_URL = 'https://picsum.photos/';
const BIG_SIZE = '600/400';
const SMALL_SIZE = '60';

const IMAGES = [
    '?image=1080',
    '?image=1079',
    '?image=1069',
    '?image=1063',
    '?image=1050',
    '?image=1039'
];

let numberImage = 0;

let startSlider = () => {
    const slide = $('.slider-previews');
    for (let i = 0; i < IMAGES.length; i++) {
        let li = $("<li>").append(`<img src="${API_URL + SMALL_SIZE + IMAGES[i]}" alt="image">`);
        if (i === numberImage) {
            li.addClass('current');
        }
        slide.append(li);
    }

    $(".slider-previews li img").on('click', function () {
        $(".slider-previews li").removeClass('current');
        $(this).parent("li").addClass('current');
        const path = $(this).attr('src').replace(SMALL_SIZE, BIG_SIZE);
        $(".slider-current img").attr('src', path);
        numberImage = IMAGES.indexOf(path.substring(path.indexOf('?image='), path.length));
    });

    $(document).on('keyup', function (e) {
        const frame = 'current';
        switch (e.keyCode) {
            case 39 : {
                numberImage++;
                if (numberImage >= IMAGES.length) {
                    numberImage = 0;
                }
                break;
            }
            case 37 : {
                numberImage--;
                if (numberImage < 0) {
                    numberImage = IMAGES.length - 1;
                }
                break;
            }
            default : {
                return;
            }
        }
        $('.slider-current').find('img').attr('src', `${API_URL}${BIG_SIZE}/${IMAGES[numberImage]}`);
        slide.find('.' + frame).removeClass(frame);
        $(slide.find('li')[numberImage]).attr('class', frame);
    });
};

startSlider();

