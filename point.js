
var NewPointer = document.createElement('div');
NewPointer.id = 'mouse';
StylePointer();
document.getElementsByTagName('body')[0].appendChild(NewPointer);

function StylePointer() {
    NewPointer.style.position = 'fixed';
    NewPointer.style.backgroundColor = '#ff0000';
    NewPointer.style.width = '20px';
    NewPointer.style.height = '20px';
    NewPointer.style.left = '50%';
    NewPointer.style.top = '50%';
    NewPointer.style.transform = 'translate(-50%, -50%)';
    NewPointer.style.opacity = 0.8;
    NewPointer.style.borderRadius = '25px';
    NewPointer.style.zIndex = '2147483647';
    NewPointer.style.pointerEvents = 'none';
}