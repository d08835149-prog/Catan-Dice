function rollCatanDice() {
    // 일반 주사위 (1-6)
    const red = Math.floor(Math.random() * 6) + 1;
    const yellow = Math.floor(Math.random() * 6) + 1;
    
    // 특수 주사위 (야만인 3개, 성 3개 - 노랑, 초록, 파랑)
    const specialFaces = ['야만인', '야만인', '야만인', '노랑 성', '초록 성', '파랑 성'];
    const special = specialFaces[Math.floor(Math.random() * specialFaces.length)];
    
    // 화면 업데이트
    document.getElementById('red-dice').innerText = red;
    document.getElementById('yellow-dice').innerText = yellow;
    document.getElementById('total').innerText = red + yellow;
    document.getElementById('special-dice').innerText = special;
}
