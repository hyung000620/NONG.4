const apiVideoElem = document.querySelector('.apiVideo-class');
const intermediateElem = document.querySelector('.intermediate-class');
const advancedElem = document.querySelector('.advanced-class');
const masterElem = document.querySelector('.master-class');

apiVideoElem.addEventListener('click', () => {
    location.href="/api/apiVideo";
});
intermediateElem.addEventListener('click', () => {
    location.href="/api/intermediate";
});
advancedElem.addEventListener('click', () => {
    location.href="/api/advanced";
});
masterElem.addEventListener('click', () => {
    location.href="/api/master";
});

function moveToDetail(iboard){
    location.href = '/board/boardDetail?iboard=' + iboard;
}
