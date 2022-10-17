const rangeSlider = document.getElementById('range-slider');

if (rangeSlider) {
    noUiSlider.create(rangeSlider, {
        start: [124, 20000],
        connect: true,
        step: 1,
        range: {
            'min': [124],
            'max': [20000]
        }
    });

    const input0 = document.getElementById('input-0');
    const input1 = document.getElementById('input-1');
    const inputs = [input0, input1];

    rangeSlider.noUiSlider.on('update', (values, handle) => {
        inputs[handle].value = Math.round(values[handle]);
    })
}