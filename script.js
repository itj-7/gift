document.addEventListener('DOMContentLoaded', function () {
    const contentDiv = document.getElementById('content');
    let yesButtonSize = 32;
    let noButtonSize = 32;

    function updateContent(newContent, gif = "assets/dudu-flower.gif") {
        contentDiv.innerHTML = `
            <img src="${gif}" alt="Cute GIF" class="flower-gif">
            ${newContent}
        `;
    }

    function adjustButtonSize(button, isYes) {
        if (isYes) {
            yesButtonSize += 20;
            button.style.fontSize = `${yesButtonSize}px`;
        } else {
            noButtonSize = Math.max(8, noButtonSize - 5);
            button.style.fontSize = `${noButtonSize}px`;
        }
    }

    contentDiv.addEventListener('click', function (event) {
        if (event.target.id === 'yesBtn') {
            adjustButtonSize(event.target, true);

            updateContent(`
                <h1>Now would you forgive me?</h1>
                <h2>For all the times I made you cry?</h2>
                <button id="forgiveYesBtn" style="font-size: ${yesButtonSize}px;">Yes, I forgive you!</button>
                <button id="forgiveNoBtn" style="font-size: ${noButtonSize}px;">No, I don't forgive you!</button>
            `);
        } else if (event.target.id === 'noBtn') {
            adjustButtonSize(event.target, false);

            updateContent(`
                <h1>Why don't you love me?</h1>
                <button id="loveYesBtn" style="font-size: ${yesButtonSize}px;">I do love you!</button>
                <button id="loveNoBtn" style="font-size: ${noButtonSize}px;">I don't love you anymore!</button>
            `);
        } else if (event.target.id === 'forgiveYesBtn') {
            adjustButtonSize(event.target, true);

            updateContent(`
                <h1>Will you stay with me forever?</h1>
                <h2>Even when times are tough?</h2>
                <button id="stayYesBtn" style="font-size: ${yesButtonSize}px;">Yes, forever!</button>
            `, "assets/stafford-matt.gif");
        } else if (event.target.id === 'forgiveNoBtn') {
            adjustButtonSize(event.target, false);

            updateContent(`
                <h1>Pwease sowwy</h1>
                <button id="forgiveYesBtn" style="font-size: ${yesButtonSize}px;">Please forgive me!</button>
            `, "assets/cry.gif");
        } else if (event.target.id === 'loveYesBtn') {
            adjustButtonSize(event.target, true);

            updateContent(`
                <h1>Now would you forgive me?</h1>
                <h2>For all the times I made you cry?</h2>
                <button id="forgiveYesBtn" style="font-size: ${yesButtonSize}px;">Yes, I forgive you!</button>
                <button id="forgiveNoBtn" style="font-size: ${noButtonSize}px;">No, I don't forgive you!</button>
            `);
        } else if (event.target.id === 'loveNoBtn') {
            adjustButtonSize(event.target, false);

            updateContent(`
                <h1>Oh no! </h1>
                <h2>N7bk tyb</h2>
                <button id="acceptYesBtn" style="font-size: ${yesButtonSize}px;">Fine, I accept!</button>
                <button id="acceptNoBtn" style="font-size: ${noButtonSize}px;">No, never!</button>
            `);
        } else if (event.target.id === 'stayYesBtn') {
            adjustButtonSize(event.target, true);

            updateContent(`
                <h1>Yay! I knew it! 💖</h1>
                <h2>Would you marry me?</h2>
                <button id="marryYesBtn" style="font-size: ${yesButtonSize}px;">Yes, I will!</button>
            `, "assets/bear.gif");
        }else if (event.target.id === 'acceptYesBtn') {
            adjustButtonSize(event.target, true);

            updateContent(`
                    <h1>Now would you forgive me?</h1>
                    <h2>For all the times I made you cry?</h2>
                    <button id="forgiveYesBtn" style="font-size: ${yesButtonSize}px;">Yes, I forgive you!</button>
                    <button id="forgiveNoBtn" style="font-size: ${noButtonSize}px;">No, I don't forgive you!</button>
                `);
        } else if (event.target.id === 'acceptNoBtn') {
            adjustButtonSize(event.target, false);

            updateContent(`
                    <h1>Oh no! </h1>
                    <h2>Sadly, you're stuck with my love forever!</h2>
                    <h3>OH NOOOOO~~</h3>
                    <button id="tryYesBtn" style="font-size: ${yesButtonSize}px;">I have no choice imma accept it</button>
                `);
        } else if (event.target.id === 'tryYesBtn') {
            adjustButtonSize(event.target, true);

            updateContent(`
                    <h1>Now would you forgive me?</h1>
                    <h2>For all the times I made you cry?</h2>
                    <button id="forgiveYesBtn" style="font-size: ${yesButtonSize}px;">Yes, I forgive you!</button>
                    <button id="forgiveNoBtn" style="font-size: ${noButtonSize}px;">No, I don't forgive you!</button>
                `);}
         else if (event.target.id === 'marryYesBtn') {
            adjustButtonSize(event.target, true);

            updateContent(`
                <h1>Yay! 💖</h1>
                <h2>We are meant to be together!</h2>
                <h3>Forever and ever!</h3>
                <h4>kissss timeee</h4>
                <div class="kisses">
                    <img src="assets/kiss1.gif" alt="Kiss 1" class="kiss-gif">
                    <img src="assets/kiss2.gif" alt="Kiss 2" class="kiss-gif">
                </div>
                <button id="homeBtn" class="home-btn">Home</button>
            `);
        } else if (event.target.id === 'homeBtn') {
            location.reload();
        }
    });
});