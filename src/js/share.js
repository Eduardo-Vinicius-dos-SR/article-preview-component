const share = document.getElementById("share");

const shareLink = document.getElementById("share-link");

const shareOptions = document.createElement("div");
shareOptions.classList.add("share-options");
shareOptions.innerHTML = `<a href="#device-options" target="_blank"><h2>SHARE</h2></a>
	<a href="#facebook.com" target="_blank"><img src="./src/images/icon-facebook.svg" alt="facebook share"/></a>
	<a href="#twitter.com" target="_blank">
	<img src="./src/images/icon-twitter.svg" alt="twitter share"a>
	<a href="#pinterest.com" target="_blank"><img src="./src/images/icon-pinterest.svg" alt="pinterest share"/></a>`;

const shareChilds = shareOptions.querySelectorAll("*");

shareLink.addEventListener("click", () => {
	shareLink.classList.toggle("active");
	if (share.contains(shareOptions)) {
		share.removeChild(shareOptions);
	} else {
		share.appendChild(shareOptions);
		shareChilds.forEach((child) => {
			child.addEventListener("click", () => {
				if (share.contains(shareOptions)) {
					share.removeChild(shareOptions);
				}
				shareLink.classList.remove("active");
			});
		});
	}
});
