        angular.module('ben10FanWiki', [])
            .controller('MainController',['$scope', '$sce', function ($scope, $sce) {






$scope.toggleVideo = function(index) {
    // Pause all videos and reset currentTime
    var videos = document.querySelectorAll('video');
    videos.forEach(function(video) {
        video.pause();
        video.currentTime = 0;
    });

    // Pause all iframes except the one that is being expanded
    var iframes = document.querySelectorAll('iframe');
    iframes.forEach(function(iframe, i) {
        if (i !== index) {
            iframe.setAttribute('src', '');
        }
    });

    // Determine the current section
    var currentSection = '';
    switch ($scope.currentSeason) {
        case 'classic':
            currentSection = 'classic';
            break;
        case 'alienforce':
            currentSection = 'alienforce';
            break;
        case 'ultimatealien':
            currentSection = 'ultimatealien';
            break;
    }

    console.log("Current Section:", currentSection);
    console.log("Index:", index);

    // Handle the selected video
    var videosArray;
    var activeVideoKey;
    switch (currentSection) {
        case 'classic':
            videosArray = $scope.videos;
            activeVideoKey = 'activeClassicVideo';
            break;
        case 'alienforce':
            videosArray = $scope.alienforceVideos;
            activeVideoKey = 'activeAlienForceVideo';
            break;
        case 'ultimatealien':
            videosArray = $scope.ultimatealienVideos;
            activeVideoKey = 'activeUltimateAlienVideo';
            break;
        default:
            videosArray = [];
            activeVideoKey = '';
    }

    // Expand the div when a video is clicked
    var selectedDiv = document.getElementById('videosSection');
    selectedDiv.classList.add('expanded'); // Add a CSS class to expand the div

    // Check if the clicked video is already active, if so, deactivate it
    if ($scope[activeVideoKey] === index) {
        $scope[activeVideoKey] = -1;
        selectedDiv.classList.remove('expanded'); // Remove the expanded class to collapse the div
        return;
    }

    // Activate the clicked video
    $scope[activeVideoKey] = index;

    // Play the video if it's a GitHub video
    var selectedVideo = document.getElementById(currentSection + 'Video-' + index);
    if (selectedVideo) {
        selectedVideo.play();
    }

    // Hide the pop-out button in iframe
    hideIframeButton(index);
};

// Function to hide the pop-out button in iframe
function hideIframeButton(index) {
    setTimeout(function() {
        var iframe = document.getElementById('ultimatealienIframe-' + index);
        if (iframe) {
            try {
                var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
                var button = iframeDoc.querySelector('.drive-viewer-popout-button');
                if (button) {
                    button.style.display = 'none';
                }
            } catch (e) {
                console.error('Error accessing iframe content:', e);
            }
        }
    }, 1000); // Delay to ensure iframe content is loaded
}






$scope.showSeason = function (season) {
    // Pause all audio elements
    document.querySelectorAll('audio').forEach(function(audio) {
        audio.pause();
    });

    // Pause all video elements
    document.querySelectorAll('video').forEach(function(video) {
        video.pause();
    });

    // Reset the activeVideo index to collapse all video subsections
    $scope.activeClassicVideo = -1;
    $scope.activeAlienForceVideo = -1;
    $scope.activeUltimateAlienVideo = -1;

    // Hide all video contents of all seasons
    document.querySelectorAll('.video-content').forEach(function (el) {
        el.style.display = 'none';
    });

    // Show selected season content
    document.getElementById(season + 'Section').style.display = 'block';

    // Set current season for highlighting in the menu
    $scope.currentSeason = season;
};

$scope.showSeason("classic");

               $scope.alienforceVideos = [
    {
	name: "AlienForce ThemeMusic",
	 type: "github",
	 src: "https://raw.githubusercontent.com/deekshith0509/deekshith0509.github.io/main/assets/ben10/alienforcev.mp4",
	description: "The Ben 10: Alien Force theme song begins with Ben's silhouette and clips from key episodes, introducing Omnitrix aliens like Goop and Alien X. It remixes the original series' melody, evolving to reveal Alien X fully later, and appears in every episode and related media, including video games, maintaining its iconic status."
	},
 {
        "name": "Ben 10 Alien 	Force Season 1 - Episode 1",
        "src": "https://drive.google.com/file/d/1a7hInKhGxZJUQE17ZNIJHt_Ggf75EGew/preview",
        "type": "iframe",
        "description": "Ben 10 Alien Force Season 1 Episode 1: \"Ben 10 Returns: Part 1\""
    },
    {
        "name": "Ben 10 Alien Force Season 1 - Episode 2",
        "src": "https://drive.google.com/file/d/1w6_FlD24HqcHXaAKjksqEFtvQsTUC-gS/preview",
        "type": "iframe",
        "description": "Ben 10 Alien Force Season 1 Episode 2: \"Ben 10 Returns: Part 2\""
    },
    {
        "name": "Ben 10 Alien Force Season 1 - Episode 3",
        "src": "https://drive.google.com/file/d/1ZiZtSAO3IOO-y0gu2IFfG_X1N9fj6_Qh/preview",
        "type": "iframe",
        "description": "Ben 10 Alien Force Season 1 Episode 3: \"Everybody Talks About the Weather\""
    },
    {
        "name": "Ben 10 Alien Force Season 1 - Episode 4",
        "src": "https://drive.google.com/file/d/1yYFb05kkrUchFxTxOGeqTHfFz1GhI1l1/preview",
        "type": "iframe",
        "description": "Ben 10 Alien Force Season 1 Episode 4: \"Kevin's Big Score\""
    },
    {
        "name": "Ben 10 Alien Force Season 1 - Episode 5",
        "src": "https://drive.google.com/file/d/1odx-UINHYeZfNSvwS9p2lT8x_dXEz4db/preview",
        "type": "iframe",
        "description": "Ben 10 Alien Force Season 1 Episode 5: \"All That Glitters\""
    },
    {
        "name": "Ben 10 Alien Force Season 1 - Episode 6",
        "src": "https://drive.google.com/file/d/1edTb2xLjQy3jYIb8PzXKNo4RrIEV88Vt/preview",
        "type": "iframe",
        "description": "Ben 10 Alien Force Season 1 Episode 6: \"Max Out\""
    },
    {
        "name": "Ben 10 Alien Force Season 1 - Episode 7",
        "src": "https://drive.google.com/file/d/1jpLs9ohDGcADrLvhhWF4rmHTnJoOQd1p/preview",
        "type": "iframe",
        "description": "Ben 10 Alien Force Season 1 Episode 7: \"Pier Pressure\""
    },
    {
        "name": "Ben 10 Alien Force Season 1 - Episode 8",
        "src": "https://drive.google.com/file/d/1o9jMEWnL86k35yX122kKcqgdBjnrueRt/preview",
        "type": "iframe",
        "description": "Ben 10 Alien Force Season 1 Episode 8: \"What Are Little Girls Made Of?\""
    },
    {
        "name": "Ben 10 Alien Force Season 1 - Episode 9",
        "src": "https://drive.google.com/file/d/1Wo4tytwnAw3CY7wD9gDIEF1Hc_17lQQD/preview",
        "type": "iframe",
        "description": "Ben 10 Alien Force Season 1 Episode 9: \"The Gauntlet\""
    },
    {
        "name": "Ben 10 Alien Force Season 1 - Episode 10",
        "src": "https://drive.google.com/file/d/1rDz0KNYz4xj4kDZxL_Dos2NoOUR3rEO2/preview",
        "type": "iframe",
        "description": "Ben 10 Alien Force Season 1 Episode 10: \"Paradox\""
    },
    {
        "name": "Ben 10 Alien Force Season 1 - Episode 11",
        "src": "https://drive.google.com/file/d/1ULDIDGlcwUYiV8lWjrdT_VLcbo8kWKQ5/preview",
        "type": "iframe",
        "description": "Ben 10 Alien Force Season 1 Episode 11: \"Be-Knighted\""
    },
    {
        "name": "Ben 10 Alien Force Season 1 - Episode 12",
        "src": "https://drive.google.com/file/d/1oH5PmgGSkff19JA3jbw2JqHEuREXM-Ff/preview",
        "type": "iframe",
        "description": "Ben 10 Alien Force Season 1 Episode 12: \"Plumbers' Helpers\""
    },
    {
        "name": "Ben 10 Alien Force Season 1 - Episode 13",
        "src": "https://drive.google.com/file/d/1BMsBaZfXFcJXDQm_fnCm4o581ryAiqG9/preview",
        "type": "iframe",
        "description": "Ben 10 Alien Force Season 1 Episode 13: \"X = Ben + 2\""
    },
    {
        "name": "Ben 10 Alien Force Season 2 - Episode 1",
        "src": "https://drive.google.com/file/d/1hsAmkWV-tE6NnjiVUMJNbHxUCSGQbhor/preview",
        "type": "iframe",
        "description": "Ben 10 Alien Force Season 2 Episode 1: \"Darkstar Rising\""
    },
    {
        "name": "Ben 10 Alien Force Season 2 - Episode 2",
        "src": "https://drive.google.com/file/d/1jObUQM6JvQv53dyCl6q642i0fSHoLkNN/preview",
        "type": "iframe",
        "description": "Ben 10 Alien Force Season 2 Episode 2: \"Alone Together\""
    },
    {
        "name": "Ben 10 Alien Force Season 2 - Episode 3",
        "src": "https://drive.google.com/file/d/1FHXpJCpyHVkQ3XlW_lsrUDyvitasgVsd/preview",
        "type": "iframe",
        "description": "Ben 10 Alien Force Season 2 Episode 3: \"Good Copy, Bad Copy\""
    },
    {
        "name": "Ben 10 Alien Force Season 2 - Episode 4",
        "src": "https://drive.google.com/file/d/1mqUEBmPTq32C9XufOUiuXLp8klAuTlpV/preview",
        "type": "iframe",
        "description": "Ben 10 Alien Force Season 2 Episode 4: \"Save the Last Dance\""
    },
    {
        "name": "Ben 10 Alien Force Season 2 - Episode 5",
        "src": "https://drive.google.com/file/d/1szJqn6_lWABpRoRcHFu142hwuixSr0J3/preview",
        "type": "iframe",
        "description": "Ben 10 Alien Force Season 2 Episode 5: \"Undercover\""
    },
    {
        "name": "Ben 10 Alien Force Season 2 - Episode 6",
        "src": "https://drive.google.com/file/d/1EllIJ0W8CxH-oS-BMqGVMCdYfhrs3LnQ/preview",
        "type": "iframe",
        "description": "Ben 10 Alien Force Season 2 Episode 6: \"Pet Project\""
    },
    {
        "name": "Ben 10 Alien Force Season 2 - Episode 7",
        "src": "https://drive.google.com/file/d/1kuf69_XjGd3TESeR3cewe9Eoi6yW5tvJ/preview",
        "type": "iframe",
        "description": "Ben 10 Alien Force Season 2 Episode 7: \"Grounded\""
    },
    {
        "name": "Ben 10 Alien Force Season 2 - Episode 8",
        "src": "https://drive.google.com/file/d/1MIaS2qCNUAGZGz2gRKxT9DxjcUuq9b7r/preview",
        "type": "iframe",
        "description": "Ben 10 Alien Force Season 2 Episode 8: \"Voided\""
    },
    {
        "name": "Ben 10 Alien Force Season 2 - Episode 9",
        "src": "https://drive.google.com/file/d/1YB6C3NcfNj8E52f3wFGxlK3xQZ-nxBLs/preview",
        "type": "iframe",
        "description": "Ben 10 Alien Force Season 2 Episode 9: \"Inside Man\""
    },
    {
        "name": "Ben 10 Alien Force Season 2 - Episode 10",
        "src": "https://drive.google.com/file/d/11K3vxMBoXkhs-UoFoeeVwT0rAWCBRjKW/preview",
        "type": "iframe",
        "description": "Ben 10 Alien Force Season 2 Episode 10: \"Birds of a Feather\""
    },
    {
        "name": "Ben 10 Alien Force Season 2 - Episode 11",
        "src": "https://drive.google.com/file/d/1MzX0dPYhHWUtuHGPJ2kImkq4flWF3Z3T/preview",
        "type": "iframe",
        "description": "Ben 10 Alien Force Season 2 Episode 11: \"Unearthed\""
    },
    {
        "name": "Ben 10 Alien Force Season 2 - Episode 12",
        "src": "https://drive.google.com/file/d/1OAtgUQ4RgVL1fTlW7TY7GfNSbjX0dxby/preview",
        "type": "iframe",
        "description": "Ben 10 Alien Force Season 2 Episode 12: \"War of the Worlds: Part 1\""
    },
    {
        "name": "Ben 10 Alien Force Season 2 - Episode 13",
        "src": "https://drive.google.com/file/d/1gSNxQ3qbMp1z7Uvj6M9RtHmCbjx340tS/preview",
        "type": "iframe",
        "description": "Ben 10 Alien Force Season 2 Episode 13: \"War of the Worlds: Part 2\""
    },
    {
        "name": "Ben 10 Alien Force Season 3 - Episode 1",
        "src": "https://drive.google.com/file/d/1We-L4FSUxh835hNoB7yCTMiYbYyk9YYo/preview",
        "type": "iframe",
        "description": "Ben 10 Alien Force Season 3 Episode 1: \"Vengeance of Vilgax: Part 1\""
    },
    {
        "name": "Ben 10 Alien Force Season 3 - Episode 2",
        "src": "https://drive.google.com/file/d/1D4tDwCYIkQRrmDfg8HB9b8MoNtZbEYrX/preview",
        "type": "iframe",
        "description": "Ben 10 Alien Force Season 3 Episode 2: \"Vengeance of Vilgax: Part 2\""
    },
    {
        "name": "Ben 10 Alien Force Season 3 - Episode 3",
        "src": "https://drive.google.com/file/d/1FWcYVOuoaZnrjiC37EPT5spqO1BzBh2v/preview",
        "type": "iframe",
        "description": "Ben 10 Alien Force Season 3 Episode 3: \"Inferno\""
    },
    {
        "name": "Ben 10 Alien Force Season 3 - Episode 4",
        "src": "https://drive.google.com/file/d/1hTI9lKVu2LMkwETN0TXYrCE_j-U9DQdn/preview",
        "type": "iframe",
        "description": "Ben 10 Alien Force Season 3 Episode 4: \"Fool's Gold\""
    },
    {
        "name": "Ben 10 Alien Force Season 3 - Episode 5",
        "src": "https://drive.google.com/file/d/16FJv26x6ADJ9QO3fSZWwZgOg5NOWZZok/preview",
        "type": "iframe",
        "description": "Ben 10 Alien Force Season 3 Episode 5: \"Simple\""
    },
    {
        "name": "Ben 10 Alien Force Season 3 - Episode 6",
        "src": "https://drive.google.com/file/d/1BltRBIABELCsHy4n1Ep_az2GXNRpyOub/preview",
        "type": "iframe",
        "description": "Ben 10 Alien Force Season 3 Episode 6: \"Vreedle, Vreedle\""
    },
    {
        "name": "Ben 10 Alien Force Season 3 - Episode 7",
        "src": "https://drive.google.com/file/d/1pAqZdxd4S6kbivAlfnNormzVSMiURZiL/preview",
        "type": "iframe",
        "description": "Ben 10 Alien Force Season 3 Episode 7: \"Singlehanded\""
    },
    {
        "name": "Ben 10 Alien Force Season 3 - Episode 8",
        "src": "https://drive.google.com/file/d/1v89Qcv0XzansPPHMy_Aju9IIxB5g9y2P/preview",
        "type": "iframe",
        "description": "Ben 10 Alien Force Season 3 Episode 8: \"If All Else Fails\""
    },
    {
        "name": "Ben 10 Alien Force Season 3 - Episode 9",
        "src": "https://drive.google.com/file/d/1sNgRKROW9JDgFOkX5SIvSfnY7B94LJMe/preview",
        "type": "iframe",
        "description": "Ben 10 Alien Force Season 3 Episode 9: \"In Charm's Way\""
    },
    {
        "name": "Ben 10 Alien Force Season 3 - Episode 10",
        "src": "https://drive.google.com/file/d/1r0ikiaf0nN1a5Oql2UBdJTOi6VQs02bY/preview",
        "type": "iframe",
        "description": "Ben 10 Alien Force Season 3 Episode 10: \"Ghost Town\""
    },
    {
        "name": "Ben 10 Alien Force Season 3 - Episode 11",
        "src": "https://drive.google.com/file/d/1wB1vFy3C5CW9uDiJao-M51-dK1wzwYOh/preview",
        "type": "iframe",
        "description": "Ben 10 Alien Force Season 3 Episode 11: \"Trade-Off\""
    },
    {
        "name": "Ben 10 Alien Force Season 3 - Episode 12",
        "src": "https://drive.google.com/file/d/10o21a70sKA7jZDGVhdnILv4Gkh1S1FO1/preview",
        "type": "iframe",
        "description": "Ben 10 Alien Force Season 3 Episode 12: \"Busy Box\""
    },
    {
        "name": "Ben 10 Alien Force Season 3 - Episode 13",
        "src": "https://drive.google.com/file/d/1_BSiVDBMk79oNgqXH41Ch-iHjPeY4sVl/preview",
        "type": "iframe",
        "description": "Ben 10 Alien Force Season 3 Episode 13: \"Con of Rath\""
    },
    {
        "name": "Ben 10 Alien Force Season 3 - Episode 14",
        "src": "https://drive.google.com/file/d/1cpf0yEIKBXQZPhE6oqlIJTUewFcsDyfc/preview",
        "type": "iframe",
        "description": "Ben 10 Alien Force Season 3 Episode 14: \"Primus\""
    },
    {
        "name": "Ben 10 Alien Force Season 3 - Episode 15",
        "src": "https://drive.google.com/file/d/14nMM1qTWLFAWktDxIXQe11J1n4DQE9fe/preview",
        "type": "iframe",
        "description": "Ben 10 Alien Force Season 3 Episode 15: \"Greetings from Techadon\""
    },
    {
        "name": "Ben 10 Alien Force Season 3 - Episode 16",
        "src": "https://drive.google.com/file/d/11hfbfcWK0M9gYLhOXTmdaJfonX_-lRfU/preview",
        "type": "iframe",
        "description": "Ben 10 Alien Force Season 3 Episode 16: \"The Flame Keeper's Circle\""
    },
    {
        "name": "Ben 10 Alien Force Season 3 - Episode 17",
        "src": "https://drive.google.com/file/d/1WvBxekF8ifJjhP2JjJCSQ_34qtEQla6u/preview",
        "type": "iframe",
        "description": "Ben 10 Alien Force Season 3 Episode 17: \"Double or Nothing\""
    },
    {
        "name": "Ben 10 Alien Force Season 3 - Episode 18",
        "src": "https://drive.google.com/file/d/1AVIE1b8xUmMKz14gFxjHa2mlJ1nPonWG/preview",
        "type": "iframe",
        "description": "Ben 10 Alien Force Season 3 Episode 18: \"The Perfect Girlfriend\""
    },
    {
        "name": "Ben 10 Alien Force Season 3 - Episode 19",
        "src": "https://drive.google.com/file/d/1TpJJ1SNMbJ7E-WpC8yxmHhMef1QlBr3Q/preview",
        "type": "iframe",
        "description": "Ben 10 Alien Force Season 3 Episode 19: \"The Ultimate Sacrifice\""
    },
    {
        "name": "Ben 10 Alien Force Season 3 - Episode 20",
        "src": "https://drive.google.com/file/d/1dIhBEQD7TZs0oWdbg7PiVmzx4-FSsEIN/preview",
        "type": "iframe",
        "description": "Ben 10 Alien Force Season 3 Episode 20: \"The Widening Gyre\""
    }

];
































$scope.ultimatealienVideos = [
{
	"name": "Ultimate Alien themeMusic",
	"src": "https://raw.githubusercontent.com/deekshith0509/deekshith0509.github.io/main/assets/ben10/ultimatealien.mkv",
	"type": "github",
	"description": "Ben 10 Ultimate ALien them music(INTRO)"
},

{
    "name": "Ben 10 Ultimate Alien S1 E1",
    "src": "https://drive.google.com/file/d/1bVnRf8IJsRIUMgARJNMiNx5YTpmxW9Ar/preview",
    "type": "iframe",
    "description": "Ben 10 Ultimate Alien Season 1 Episode 1: \"Fame\""
},
{
    "name": "Ben 10 Ultimate Alien S1 E2",
    "src": "https://drive.google.com/file/d/1NlYDBmpqPa0nQoBJbiAQYN4dJDuBI7XT/preview",
    "type": "iframe",
    "description": "Ben 10 Ultimate Alien Season 1 Episode 2: \"Duped\""
},
{
    "name": "Ben 10 Ultimate Alien S1 E3",
    "src": "https://drive.google.com/file/d/1HiPDXL8pYjCNtc6vcxAvkmT5SjTHjmmu/preview",
    "type": "iframe",
    "description": "Ben 10 Ultimate Alien Season 1 Episode 3: \"Hit 'Em Where They Live\""
},
{
    "name": "Ben 10 Ultimate Alien S1 E4",
    "src": "https://drive.google.com/file/d/1lvX7IfuS_i-ZuQZjsKyHqVmstN19FGuP/preview",
    "type": "iframe",
    "description": "Ben 10 Ultimate Alien Season 1 Episode 4: \"Video Games\""
},
{
    "name": "Ben 10 Ultimate Alien S1 E5",
    "src": "https://drive.google.com/file/d/1SXPgVRhX7BkpPmHw36ux2ptdB9ZHlD7m/preview",
    "type": "iframe",
    "description": "Ben 10 Ultimate Alien Season 1 Episode 5: \"Escape from Aggregor\""
},
{
    "name": "Ben 10 Ultimate Alien S1 E6",
    "src": "https://drive.google.com/file/d/10ltnrbaRuA7cMSc4DS98VuGISv8_-G7y/preview",
    "type": "iframe",
    "description": "Ben 10 Ultimate Alien Season 1 Episode 6: \"Too Hot to Handle\""
},
{
    "name": "Ben 10 Ultimate Alien S1 E7",
    "src": "https://drive.google.com/file/d/1TH2EJSWJ1uSsSSxCg_mQWJC7BumLdSJT/preview",
    "type": "iframe",
    "description": "Ben 10 Ultimate Alien Season 1 Episode 7: \"Andreas' Fault\""
},
{
    "name": "Ben 10 Ultimate Alien S1 E8",
    "src": "https://drive.google.com/file/d/1UuV-lfqNZPe_JEKQwY6ElC3qbtLOXECK/preview",
    "type": "iframe",
    "description": "Ben 10 Ultimate Alien Season 1 Episode 8: \"Fused\""
},
{
    "name": "Ben 10 Ultimate Alien S1 E9",
    "src": "https://drive.google.com/file/d/1wfdT1pv72CUb889yDRs0tFhxpkLJWdOS/preview",
    "type": "iframe",
    "description": "Ben 10 Ultimate Alien Season 1 Episode 9: \"Hero Time\""
},
{
    "name": "Ben 10 Ultimate Alien S1 E10",
    "src": "https://drive.google.com/file/d/1t-FMG442oENUFAlUva2RutLLF5XjtebS/preview",
    "type": "iframe",
    "description": "Ben 10 Ultimate Alien Season 1 Episode 10: \"Ultimate Aggregor\""
},
{
    "name": "Ben 10 Ultimate Alien S1 E11",
    "src": "https://drive.google.com/file/d/1gySppm-S3PIgU4xX65aQ5ctVnuIxrFKr/preview",
    "type": "iframe",
    "description": "Ben 10 Ultimate Alien Season 1 Episode 11: \"Map of Infinity\""
},
{
    "name": "Ben 10 Ultimate Alien S1 E12",
    "src": "https://drive.google.com/file/d/1bOrkdfiXzAbMeUgoqCnvR-uEM6q4iGZ6/preview",
    "type": "iframe",
    "description": "Ben 10 Ultimate Alien Season 1 Episode 12: \"Reflected Glory\""
},
{
    "name": "Ben 10 Ultimate Alien S1 E13",
    "src": "https://drive.google.com/file/d/1cG0c9Vqm6CDRxFWFFpDrXLwV18vX_bpd/preview",
    "type": "iframe",
    "description": "Ben 10 Ultimate Alien Season 1 Episode 13: \"Deep\""
},
{
    "name": "Ben 10 Ultimate Alien S1 E14",
    "src": "https://drive.google.com/file/d/1k7H4Jg9538w7ITDnCUb0Hd7GGJ8KNFzM/preview",
    "type": "iframe",
    "description": "Ben 10 Ultimate Alien Season 1 Episode 14: \"Where the Magic Happens\""
},
{
    "name": "Ben 10 Ultimate Alien S1 E15",
    "src": "https://drive.google.com/file/d/1dZth3hqMP6QUDb5ZSEQ9-aV1YF4ExeUD/preview",
    "type": "iframe",
    "description": "Ben 10 Ultimate Alien Season 1 Episode 15: \"Gang War\""
},
{
    "name": "Ben 10 Ultimate Alien S1 E16",
    "src": "https://drive.google.com/file/d/1tpuFLvT0lI1aAQqXbsxXCRQoVgY9gt6v/preview",
    "type": "iframe",
    "description": "Ben 10 Ultimate Alien Season 1 Episode 16: \"Too Hot to Handle\""
},
{
    "name": "Ben 10 Ultimate Alien S1 E17",
    "src": "https://drive.google.com/file/d/1ZxXCdC7TUcmCJlSZi9Q54Hswf9ThvZ1_/preview",
    "type": "iframe",
    "description": "Ben 10 Ultimate Alien Season 1 Episode 17: \"Andreas' Fault\""
},
{
    "name": "Ben 10 Ultimate Alien S1 E18",
    "src": "https://drive.google.com/file/d/13AiPtx50uRtUQtRDDaks1RcxinUG3CvG/preview",
    "type": "iframe",
    "description": "Ben 10 Ultimate Alien Season 1 Episode 18: \"The Forge of Creation\""
},
{
    "name": "Ben 10 Ultimate Alien S1 E19",
    "src": "https://drive.google.com/file/d/10z85kNcXU000KAJ9ej4sjNhecX_VpRLF/preview",
    "type": "iframe",
    "description": "Ben 10 Ultimate Alien Season 1 Episode 19: \"...Nor Iron Bars a Cage\""
},
{
    "name": "Ben 10 Ultimate Alien S1 E20",
    "src": "https://drive.google.com/file/d/1m3kt2tyL-LvtlvblsiqXvjnBkPlXc9Os/preview",
    "type": "iframe",
    "description": "Ben 10 Ultimate Alien Season 1 Episode 20: \"The Widening Gyre\""
},
{
    "name": "Ben 10 Ultimate Alien S2 E1",
    "src": "https://drive.google.com/file/d/1-7D518ojIe3cjU3hM9qPmPNMC-lDvXLo/preview",
    "type": "iframe",
    "description": "Ben 10 Ultimate Alien Season 2 Episode 1: \"The Transmogrification of Eunice\""
},
{
    "name": "Ben 10 Ultimate Alien S2 E2",
    "src": "https://drive.google.com/file/d/1TUm5laZPkmhDZJx40HWMmC-l-QVLtYJ0/preview",
    "type": "iframe",
    "description": "Ben 10 Ultimate Alien Season 2 Episode 2: \"Eye of the Beholder\""
},
{
    "name": "Ben 10 Ultimate Alien S2 E3",
    "src": "https://drive.google.com/file/d/1FaoHXn8Qsy9puHJ-OkXNUaI01a7AUSDh/preview",
    "type": "iframe",
    "description": "Ben 10 Ultimate Alien Season 2 Episode 3: \"The Big Story\""
},
{
    "name": "Ben 10 Ultimate Alien S2 E4",
    "src": "https://drive.google.com/file/d/1rGIHG7x-MEZ-IuYF9rcy8E9xFFIpyg1v/preview",
    "type": "iframe",
    "description": "Ben 10 Ultimate Alien Season 2 Episode 4: \"Save the Last Dance\""
},
{
    "name": "Ben 10 Ultimate Alien S2 E5",
    "src": "https://drive.google.com/file/d/1PFVS2KgENlR-gPTSRIEbgMpDDJySlSzO/preview",
    "type": "iframe",
    "description": "Ben 10 Ultimate Alien Season 2 Episode 5: \"The Creature from Beyond\""
},
{
    "name": "Ben 10 Ultimate Alien S2 E6",
    "src": "https://drive.google.com/file/d/171i5fjOK0Cap5uzj51CjDjqjzKhPxhUQ/preview",
    "type": "iframe",
    "description": "Ben 10 Ultimate Alien Season 2 Episode 6: \"The Enemy of My Enemy\""
},
{
    "name": "Ben 10 Ultimate Alien S2 E7",
    "src": "https://drive.google.com/file/d/1XqYbAl_1DfAk3091IGh0xq0Aowx7ji0c/preview",
    "type": "iframe",
    "description": "Ben 10 Ultimate Alien Season 2 Episode 7: \"Absolute Power: Part 1\""
},
{
    "name": "Ben 10 Ultimate Alien S2 E8",
    "src": "https://drive.google.com/file/d/1KdFi-JjZaWLZiCcsoPRyGXxxWUiA0qsz/preview",
    "type": "iframe",
    "description": "Ben 10 Ultimate Alien Season 2 Episode 8: \"Absolute Power: Part 2\""
},
{
    "name": "Ben 10 Ultimate Alien S2 E9",
    "src": "https://drive.google.com/file/d/1KFEtjgpd8D1SFJPvFIyST5H7y6IQEA1a/preview",
    "type": "iframe",
    "description": "Ben 10 Ultimate Alien Season 2 Episode 9: \"The Mother of All Vreedles\""
},
{
    "name": "Ben 10 Ultimate Alien S2 E10",
    "src": "https://drive.google.com/file/d/1v09mF1-goeT9NcRFWTSiD-K8FLTqHq0t/preview",
    "type": "iframe",
    "description": "Ben 10 Ultimate Alien Season 2 Episode 10: \"It's Not Easy Being Gwen\""
},
{
    "name": "Ben 10 Ultimate Alien S2 E11",
    "src": "https://drive.google.com/file/d/1ivxGP-k9BrRYkW8IQG-6UoEKyYf1K7oX/preview",
    "type": "iframe",
    "description": "Ben 10 Ultimate Alien Season 2 Episode 11: \"Ben 10,000 Returns\""
},
{
    "name": "Ben 10 Ultimate Alien S2 E12",
    "src": "https://drive.google.com/file/d/1s1msMYEk6312QLTpM_8W6BI824v4A7gb/preview",
    "type": "iframe",
    "description": "Ben 10 Ultimate Alien Season 2 Episode 12: \"Moonstruck\""
},
{
    "name": "Ben 10 Ultimate Alien S3 E1",
    "src": "https://drive.google.com/file/d/1jNS4ZFAq7RYMjd3tOJfeO0AQDHJw9w1H/preview",
    "type": "iframe",
    "description": "Ben 10 Ultimate Alien Season 3 Episode 1: \"The Purge\""
},
{
    "name": "Ben 10 Ultimate Alien S3 E2",
    "src": "https://drive.google.com/file/d/1eUS8sAOUkxPveCnGGL2VUoURndSQotwv/preview",
    "type": "iframe",
    "description": "Ben 10 Ultimate Alien Season 3 Episode 2: \"Simian Says\""
},
{
    "name": "Ben 10 Ultimate Alien S3 E3",
    "src": "https://drive.google.com/file/d/1stZccuwcsNgnNL7UysWQ364De6mo1ibt/preview",
    "type": "iframe",
    "description": "Ben 10 Ultimate Alien Season 3 Episode 3: \"Greetings from Techadon\""
},
{
    "name": "Ben 10 Ultimate Alien S3 E4",
    "src": "https://drive.google.com/file/d/1N4pWlR6fmhA0A9C38tv9dtthY0v5FUCW/preview",
    "type": "iframe",
    "description": "Ben 10 Ultimate Alien Season 3 Episode 4: \"The Flame Keepers' Circle\""
},
{
    "name": "Ben 10 Ultimate Alien S3 E5",
    "src": "https://drive.google.com/file/d/1mb-5WZehYKh6F8XOkOBOvLFaTJWnNW-1/preview",
    "type": "iframe",
    "description": "Ben 10 Ultimate Alien Season 3 Episode 5: \"Double or Nothing\""
},
{
    "name": "Ben 10 Ultimate Alien S3 E6",
    "src": "https://drive.google.com/file/d/1NKnfxEIvBuXDn-ID3xo5_ECNMG0cLDqs/preview",
    "type": "iframe",
    "description": "Ben 10 Ultimate Alien Season 3 Episode 6: \"The Perfect Girlfriend\""
},
{
    "name": "Ben 10 Ultimate Alien S3 E7",
    "src": "https://drive.google.com/file/d/1NWS7JrOTvMHjKVfYWs9_RxnJHESBwrQe/preview",
    "type": "iframe",
    "description": "Ben 10 Ultimate Alien Season 3 Episode 7: \"The Ultimate Sacrifice\""
},
{
    "name": "Ben 10 Ultimate Alien S3 E8",
    "src": "https://drive.google.com/file/d/1_EL2koiQQvw4jCgiBbwYzgeZ76pLIMFY/preview",
    "type": "iframe",
    "description": "Ben 10 Ultimate Alien Season 3 Episode 8: \"The Widening Gyre\""
},
{
    "name": "Ben 10 Ultimate Alien S3 E9",
    "src": "https://drive.google.com/file/d/1bejAtNb1c6CO46af-jW7kfqE9mdDrhON/preview",
    "type": "iframe",
    "description": "Ben 10 Ultimate Alien Season 3 Episode 9: \"The Mother of All Vreedles\""
},
{
    "name": "Ben 10 Ultimate Alien S3 E10",
    "src": "https://drive.google.com/file/d/1sADqfHJ43Kxt8fMGM9rPRLW8OI5arxqx/preview",
    "type": "iframe",
    "description": "Ben 10 Ultimate Alien Season 3 Episode 10: \"The Enemy of My Frenemy\""
},
{
    "name": "Ben 10 Ultimate Alien S3 E11",
    "src": "https://drive.google.com/file/d/1j0dEJeR5fpCkttldDHKmr0Y59qqOqo2_/preview",
    "type": "iframe",
    "description": "Ben 10 Ultimate Alien Season 3 Episode 11: \"The Ultimate Enemy: Part 1\""
},
{
    "name": "Ben 10 Ultimate Alien S3 E12",
    "src": "https://drive.google.com/file/d/1aFNrlmr96VSrrth-bHXP0FIYgrc89qvf/preview",
    "type": "iframe",
    "description": "Ben 10 Ultimate Alien Season 3 Episode 12: \"The Ultimate Enemy: Part 2\""
},
{
    "name": "Ben 10 Ultimate Alien S3 E13",
    "src": "https://drive.google.com/file/d/19fIaBJpaz05q4-SLhDnVus6eFQ5o64Cn/preview",
    "type": "iframe",
    "description": "Ben 10 Ultimate Alien Season 3 Episode 13: \"The Ultimate Enemy: Part 3\""
},
{
    "name": "Ben 10 Ultimate Alien S3 E14",
    "src": "https://drive.google.com/file/d/15d6oiy5nFODxgtLdvrLeCZ4rWxqByNj8/preview",
    "type": "iframe",
    "description": "Ben 10 Ultimate Alien Season 3 Episode 14: \"The Ultimate Enemy: Part 4\""
},
{
    "name": "Ben 10 Ultimate Alien S3 E15",
    "src": "https://drive.google.com/file/d/13z7AOHJeXoTkYq7jqo9biJttF26QPbPD/preview",
    "type": "iframe",
    "description": "Ben 10 Ultimate Alien Season 3 Episode 15: \"Perplexahedron\""
},
{
    "name": "Ben 10 Ultimate Alien S3 E16",
    "src": "https://drive.google.com/file/d/1uap0bGHUUW1dcJwq48FNvtKwXmpasz2T/preview",
    "type": "iframe",
    "description": "Ben 10 Ultimate Alien Season 3 Episode 16: \"The Forge of Creation\""
},
{
    "name": "Ben 10 Ultimate Alien S3 E17",
    "src": "https://drive.google.com/file/d/1vSzoaxK4hHvJDC5Wynk-L5Zrw2UO-6Q-/preview",
    "type": "iframe",
    "description": "Ben 10 Ultimate Alien Season 3 Episode 17: \"...Nor Iron Bars a Cage\""
},
{
    "name": "Ben 10 Ultimate Alien S3 E18",
    "src": "https://drive.google.com/file/d/1JGCojDkVUkSCYpnt7sSmnjRvtGE5W9GK/preview",
    "type": "iframe",
    "description": "Ben 10 Ultimate Alien Season 3 Episode 18: \"The Return of Psyphon\""
},
{
    "name": "Ben 10 Ultimate Alien S3 E19",
    "src": "https://drive.google.com/file/d/1Yei9ndNuZtI-ZVYlKW-6441gQE76ITAE/preview",
    "type": "iframe",
    "description": "Ben 10 Ultimate Alien Season 3 Episode 19: \"The Secret of Chromastone\""
},
{
    "name": "Ben 10 Ultimate Alien S3 E20",
    "src": "https://drive.google.com/file/d/1Vu5CJchMhdeEX1nKV-6Fn5OLk5G7jfla/preview",
    "type": "iframe",
    "description": "Ben 10 Ultimate Alien Season 3 Episode 20: \"Absolute Power: Part 1\""
}


];

			   $scope.characters = [
					
                    { name: 'Ben Tennyson', image: "https://static.wikia.nocookie.net/ben10/images/f/fe/TEN_%28461%29.png", bio: "Ben Tennyson is the main protagonist in the Ben 10 franchise, which spans across various animated television series, movies, comic books, and video games. He is a young boy who discovers a powerful alien device called the Omnitrix during a summer vacation with his cousin Gwen and their Grandpa Max. The Omnitrix allows him to transform into various alien species, each with its own unique abilities and characteristics." },
					{name: "Azmuth",image: "https://static.wikia.nocookie.net/ben10/images/c/cf/TToE_%28661%29.png/",bio: "Azmuth is a highly intelligent and enigmatic Galvan scientist in the Ben 10 series, revered as one of the most brilliant minds in the galaxy. As the creator of the Omnitrix, a powerful device capable of transforming its wearer into various alien forms, Azmuth plays a pivotal role in Ben Tennyson's adventures. Despite his small stature, Azmuth possesses immense wisdom and knowledge, often guiding Ben and his allies with his profound insights and strategic thinking. However, Azmuth is also known for his stubbornness and reluctance to intervene directly, preferring to observe and manipulate events from behind the scenes. Throughout the series, Azmuth's motives and allegiances remain shrouded in mystery, adding to his mystique and intrigue as a central figure in the Ben 10 universe."},
                    { name: 'Gwen Tennyson', image: 'https://static.wikia.nocookie.net/ben10/images/c/c3/Nega_%28434%29.png/', bio: "Gwen Tennyson is one of the main characters in the 'Ben 10' franchise. She is the cousin of the protagonist, Ben Tennyson, and plays a crucial role throughout the series. Gwen is depicted as an intelligent, resourceful, and courageous young girl who often finds herself involved in the various adventures and battles that Ben encounters. Despite not possessing any superpowers like Ben, Gwen compensates with her quick thinking, problem-solving skills, and proficiency in magic, which she discovers later in the series." },
                    {name:"Vilgax",image:"https://static.wikia.nocookie.net/ben10/images/0/03/Secrets_%28424%29.png",bio: "Vilgax is a formidable and relentless antagonist in the 'Ben 10' series. As a powerful warlord and conqueror, he possesses immense strength, intelligence, and cunning. Vilgax is a squid-like alien with red eyes, sharp teeth, and a muscular physique. He is driven by a relentless desire to obtain the Omnitrix, a powerful device that grants its wielder the ability to transform into various alien forms. Vilgax will stop at nothing to achieve his goal, often engaging in fierce battles with Ben Tennyson, the Omnitrix's current bearer. Despite facing numerous defeats, Vilgax remains a persistent threat, constantly scheming and plotting new ways to seize control of the Omnitrix and conquer the universe."},
					{name: "Kevin Levin",image: "https://static.wikia.nocookie.net/ben10/images/a/ab/GM_%28403%29.png",bio: "Kevin Levin is a complex character in the 'Ben 10' series, initially introduced as a villain before later becoming one of Ben Tennyson's closest allies. He possesses the unique ability to absorb and manipulate various forms of energy, making him a formidable adversary and valuable asset in battles. Kevin has a troubled past, having grown up on the streets and faced hardships that shaped his cynical outlook on life. Despite his rough exterior, Kevin harbors a sense of loyalty and morality, often demonstrating acts of heroism and selflessness. Over time, he develops a strong bond with Ben and Gwen Tennyson, becoming an integral part of their team. Kevin's journey from antagonist to ally showcases his growth and redemption throughout the series."},
					{name: "Max Tennyson", image: "https://static.wikia.nocookie.net/ben10/images/f/ff/Secrets_%28932%29.png/", bio: "Max Tennyson, known as Grandpa Max, is a seasoned Plumber and the wise, adventurous grandfather of Ben and Gwen Tennyson. Sporting a rugged appearance with his gray hair, goatee, and trademark Hawaiian shirt, Max is a skilled fighter with extensive knowledge of extraterrestrial life and advanced technology. He provides guidance and support to Ben and Gwen, drawing from his years of experience battling alien threats. Max's resourcefulness and bravery make him a formidable ally, often playing a crucial role in their adventures. Despite his tough exterior, he is deeply caring and protective, always putting his family's safety first. Max's legacy as a Plumber and his enduring spirit inspire his grandchildren to uphold justice and protect the Earth."},
					{name: "Tetrax",image: "https://static.wikia.nocookie.net/ben10/images/e/ef/Hunted_%281179%29.png/",bio: "Tetrax Shard, a reformed Petrosapien mercenary from Petropia, is a crucial ally to Ben Tennyson in the Ben 10 series. Initially a self-centered bounty hunter, Tetrax worked for the villain Vilgax, inadvertently contributing to the destruction of his home planet. This event catalyzed his transformation into a hero dedicated to preventing powerful weapons from falling into evil hands. Resembling Diamondhead, Tetrax's appearance includes a shiny grey bodysuit with triangular motifs and a retractable black helmet. Skilled in hand-to-hand combat and strategy, Tetrax boasts immense durability and the ability to fire crystal shards. His advanced suit and array of high-tech gadgets, including a multifunctional blaster and a personal hoverboard, aid in his missions. Despite his tough exterior, Tetrax is deeply remorseful for his past actions and is committed to protecting the Omnitrix and mentoring Ben, ultimately assisting in the restoration of Petropia and its people."},
					// Add more characters here...
									];
                $scope.aliens = [
				{name: "Alien X",image: "https://static.wikia.nocookie.net/ben10/images/7/73/WXI1_%28416%29.png/",description: "Alien X, also known as a Celestialsapien, is one of the most powerful aliens in the Ben 10 universe. Originating from the Forge of Creation, Alien X embodies the pinnacle of cosmic evolution. As a Celestialsapien, Alien X possesses godlike powers, capable of bending reality to its will. However, unlike other species, Alien X's abilities are governed by a consensus among its three distinct personalities: Serena, Bellicus, and Ben Tennyson. Each personality represents different aspects of Alien X's power, requiring a unanimous decision for any action. This unique trait makes Alien X both incredibly powerful and incredibly difficult to control. Despite these challenges, Alien X's abilities are unmatched, allowing it to reshape the fabric of reality itself. With its immense power and enigmatic nature, Alien X remains a force to be reckoned with, embodying the mysteries and complexities of the universe."},
				{name: "CannonBolt",image: "https://static.wikia.nocookie.net/ben10/images/d/d2/Tick_%28957%29.png/",description: "Cannonbolt is a powerful alien transformation in the Ben 10 series, known for his incredible strength and armored shell. When Ben Tennyson activates the Omnitrix, he can morph into Cannonbolt, adopting the form of a large, spherical creature with a tough, green exoskeleton. Cannonbolt's physiology grants him enhanced durability and resilience, allowing him to withstand high-impact attacks and roll into a powerful, armored ball to crash through obstacles and enemies with ease. Additionally, Cannonbolt possesses incredible agility and speed, making him a formidable combatant in both offense and defense. With his unique abilities and indomitable spirit, Cannonbolt proves to be a valuable asset in battles against villains and threats to Earth and beyond."},
				{name: "Feedback",image: "https://static.wikia.nocookie.net/ben10/images/5/5f/The_More_Things_Change%2C_Part_1_%2859%29.png/",description: "Feedback is an electrifying alien in the Ben 10 series, known for his ability to absorb and manipulate energy. Originally created by the Galvan inventor Azmuth, Feedback possesses a unique physiology that allows him to absorb various forms of energy, including electricity, radiation, and mana. Once absorbed, Feedback can channel this energy through his body, unleashing powerful blasts or enhancing his physical capabilities. Additionally, Feedback can store absorbed energy within his containment suit, enabling him to use it later or amplify his attacks. Despite his formidable powers, Feedback is vulnerable to energy-draining attacks and requires a steady source of energy to maintain his strength. With his dynamic abilities and energetic personality, Feedback adds a spark of excitement to Ben Tennyson's arsenal, proving to be a valuable asset in battles against formidable foes."},
				{name: "Ghostfreak",image: "https://static.wikia.nocookie.net/ben10/images/4/47/GhT_%28465%29.png/",description: "Ghostfreak, also known as Ectonurite, is a mysterious and eerie alien in the Ben 10 series. Originating from the planet Anur Phaetos, Ghostfreak possesses a ghost-like appearance and a multitude of spectral abilities. In his true form, Ghostfreak is a floating, ghostly figure with a skeletal visage and glowing green eyes. He has the ability to phase through solid objects, turn invisible, and manipulate shadows to his advantage. Additionally, Ghostfreak can detach his ghostly form from his physical body, allowing him to possess other beings and control them from within. However, Ghostfreak's powers come with a dark side – his true form is housed within a containment suit to prevent him from taking over Ben Tennyson's body. Despite his sinister nature, Ghostfreak proves to be a formidable ally in battles against supernatural threats, harnessing his spectral abilities to turn the tide in his favor."},
				{name: "Greymatter",image: "https://static.wikia.nocookie.net/ben10/images/c/cf/Hunted_%281342%29.png/", description: "Greymatter, also known as Galvan, is a diminutive alien with a big intellect in the Ben 10 series. Despite his small size, Greymatter possesses extraordinary intelligence, surpassing even the most advanced human minds. Originating from the planet Galvan Prime, Greymatter's species are renowned for their advanced technology and scientific prowess. With his keen intellect and analytical mind, Greymatter excels in problem-solving and strategizing, often outsmarting larger and more powerful adversaries. Additionally, Greymatter's size grants him enhanced agility and dexterity, allowing him to navigate tight spaces and outmaneuver opponents. While physically frail, Greymatter compensates with his superior intellect, making him an invaluable asset to Ben Tennyson's team in battles against formidable foes."},                    
				{ name: 'Heatblast', image: ' https://static.wikia.nocookie.net/ben10/images/d/db/Alliance_%28660%29.png/', description: "Heatblast, a fiery Pyronite from Ben 10 possesses unparalleled pyrokinetic abilities, manipulating intense heat and fire effortlessly. With a body of living flame, he withstands extreme temperatures and propels himself through the air with fiery jets. His arsenal includes launching fireballs, creating defensive walls of flames, and engulfing foes in infernos. Notably, Heatblast can absorb heat energy to augment his power, making him a force to be reckoned with in battle. Despite his fiery temperament, he exhibits heroism, defending innocents and confronting villains. As a fan-favorite alien, Heatblast epitomizes adventure and excitement, showcasing the diversity of Ben's transformations. His presence adds dynamism to the series, capturing the imagination of viewers with his explosive abilities and fiery demeanor." },
                { name: 'FourArms', image: ' https://static.wikia.nocookie.net/ben10/images/f/fd/Unnaturals_%281629%29.png', description: "Four Arms is a formidable alien form in the Ben 10 series. With his robust physique and four powerful arms, he stands as a symbol of strength and resilience. His imposing presence and muscular build make him a force to be reckoned with in battles against villains and adversaries. Four Arms possesses incredible physical strength, allowing him to lift heavy objects effortlessly and deliver devastating punches. Despite his intimidating appearance, Four Arms also demonstrates a gentle and caring side, often using his might to protect the innocent and uphold justice. With his extraordinary abilities and unwavering determination, Four Arms proves to be a valuable asset to Ben Tennyson in his quest to safeguard the universe." },
                {name: "ChromaStone", image: 'https://static.wikia.nocookie.net/ben10/images/6/67/IM_%28237%29.png/', description: "Chromastone, an alien from Ben 10, possesses a crystalline body with energy manipulation powers. Its appearance is humanoid, with a blue and black color scheme and crystalline structures covering its body. Chromastone's primary ability is to absorb and manipulate various forms of energy, including light and heat. It can store and release energy blasts, making it a formidable combatant. Additionally, Chromastone has enhanced durability due to its crystalline composition, making it resilient in battle. Its energy manipulation abilities extend to creating energy shields for defense. Chromastone's powers make it versatile in different combat situations, capable of adapting to various energy-based attacks. The alien's abilities are a result of its species' evolutionary traits, allowing it to thrive in environments rich with energy sources. Chromastone's energy absorption abilities grant it the advantage of replenishing its own energy levels during combat, ensuring prolonged engagements. Its crystalline form also grants it enhanced physical strength, further augmenting its combat prowess. Chromastone's design reflects its affinity for energy manipulation, with its crystalline structure resembling facets of a gemstone."},
				{name: "DiamondHead", image:'https://static.wikia.nocookie.net/ben10/images/c/c6/TEN_%281302%29.png/', description:"Diamondhead, another alien from Ben 10, boasts a crystalline body composed of durable, diamond-like material. Its appearance features sharp, angular facets and a predominantly blue color scheme. Diamondhead possesses superhuman strength, allowing it to overpower opponents with ease. Its crystalline form grants it enhanced durability, making it highly resistant to physical attacks. The alien's primary ability is the generation and manipulation of crystalline structures, which it can form into various shapes for offense and defense. Diamondhead can launch razor-sharp crystal projectiles at high speeds, making it a formidable ranged combatant. Its crystalline body also grants it the ability to regenerate lost limbs and reform its body, enhancing its longevity in battle. Diamondhead's design reflects its affinity for crystal manipulation, with its appearance resembling a living gemstone. The alien's abilities are a result of its species' evolutionary traits, adapted for survival in harsh environments. Diamondhead's versatility in combat stems from its ability to create intricate crystalline structures for a multitude of purposes. Its formidable strength and durability make it a formidable opponent in battles against both alien threats and human adversaries."},
				{name: "Upchuck",image: "https://static.wikia.nocookie.net/ben10/images/c/c1/TT_%2826%29.png/",description: "Upchuck, a small alien with a voracious appetite, has a round, green body with three stubby legs. Its wide mouth can devour almost anything and its stomach can store objects for later use. Despite its small size, Upchuck packs a powerful punch with its ability to eat and then expel energy balls. Its abilities make it a formidable opponent in combat, capable of surprising foes with its agility and unexpected attacks. Upchuck's appearance may seem harmless, but its insatiable hunger and powerful projectile abilities make it a force to be reckoned with."},
				{name: "Upgrade",image: "https://static.wikia.nocookie.net/ben10/images/2/20/Tour_%28569%29.png/",description: "Upgrade, an Omnitrix DNA sample of a Galvanic Mechamorph from Galvan Prime's moon, Galvan B, possesses a black exterior adorned with green circuit-like stripes. His body comprises billions of nanites, granting him a fluid-like form. Upgrade's primary ability lies in technological possession, allowing him to merge with and control any technology, upgrading it to ultra-tech and effortlessly repairing damaged machinery. Additionally, he can generate solid constructs, emit powerful green plasma blasts, manipulate electricity, and stretch his body extensively. Despite his formidable abilities, Upgrade has vulnerabilities, including limitations in technological possession, susceptibility to electromagnetic pulses, and being powered down by specific devices. Overall, Upgrade is a versatile alien adept at manipulating technology to his advantage in various situations."},
				{
name: "Jetray",
image: "https://static.wikia.nocookie.net/ben10/images/a/a7/EotB_%28183%29.png/",
description: "Jetray, a sleek and swift alien from the Omnitrix, is a formidable addition to Ben Tennyson's arsenal. With his aerodynamic physique and powerful wings, Jetray epitomizes agility and speed. When Ben transforms into Jetray, he gains the ability to soar through the skies with unparalleled grace, effortlessly navigating even the most treacherous aerial environments. Jetray's physiology grants him remarkable maneuverability, allowing him to execute intricate aerial maneuvers and evade enemy attacks with ease. Additionally, Jetray possesses bioelectric blasts that he can unleash from his tail, serving as both offensive projectiles and defensive measures against adversaries. Whether engaged in high-speed chases or aerial combat, Jetray's presence in battle is always a game-changer, as he swiftly outmaneuvers foes and delivers stunning attacks from above."
},
{
  "name": "Goop",
  "image": "https://static.wikia.nocookie.net/ben10/images/d/db/TG_%2873%29.png/",
  "description": "Goop is a versatile and formidable alien possessing a multitude of powers and abilities. His entire body is comprised of slime, granting him exceptional elasticity, which allows him to stretch his limbs extensively, absorb impacts, and deform himself into various shapes. Additionally, Goop can shapeshift at will, enabling him to dodge attacks, increase mobility, and mimic objects or individuals. He can generate and expel slime for offensive attacks, including acidic or adhesive varieties, and even regenerate himself with additional slime. Despite his gelatinous form, Goop possesses considerable strength, allowing him to wrestle opponents and increase the impact of his attacks. Due to his elasticity and distributed brain, Goop is highly resilient, feeling minimal pain from physical attacks and surviving lethal falls without injury. His slime is hydrophobic, enabling him to survive underwater and in intense heat environments. Equipped with an Anti-Gravity Projector, Goop can control gravity around him, enabling flight, levitation, and high-speed mobility. However, Goop's dependence on his Anti-Gravity Projector makes him vulnerable, as opponents can target or deactivate it, causing his body to collapse into a puddle until reactivated."
},
{
  "name": "Humungousaur",
  "image": "https://static.wikia.nocookie.net/ben10/images/2/27/HT_%28292%29.png/",
  "description": "Humungousaur possesses incredible strength, effortlessly lifting and throwing heavy objects to high altitudes, even into near-earth orbit. His strength surpasses that of Methanosians and Crystalsapiens but falls short of Tetramands, some Highbreed, and Evolved Vaxasaurians. He can create shock waves and generate earthquakes by clapping his hands together. Utilizing dimensional displacement, Humungousaur can alter his body size, growing up to nearly 60 feet, enhancing his strength proportionally. His thick, armored hide provides exceptional durability against various attacks and environments. Despite his size, Humungousaur displays agility, jumping high, performing acrobatic maneuvers, and running on all fours. He can survive in the vacuum of space for short durations. However, his large size makes him an easy target and limits his ability to navigate confined spaces. Humungousaur is land-based and cannot breathe underwater, though he can hold his breath for extended periods. He is vulnerable to specific attacks such as neuroshock blasts, acid, and electricity. Additionally, he can be imprisoned by mana-generated crystals and is susceptible to cold viruses, which severely reduce his strength and stamina."
},
{
  "name": "Big Chill",
  "image": "https://static.wikia.nocookie.net/ben10/images/2/24/StLD_%2827%29.png/",
  "description": "Big Chill is a powerful and versatile alien possessing the extraordinary ability of cryokinesis. With precise control over ice, he can create intricate constructs that bend and weave through the air before solidifying, showcasing remarkable creativity and skill. His freezing breath can encase targets in ice or reduce the surrounding temperature to near absolute zero, demonstrating his mastery over cold. Big Chill's freeze rays and ability to freeze objects upon touch further enhance his offensive capabilities. Additionally, he can become intangible, allowing him to phase through solid matter effortlessly and evade attacks with ease. His high-speed flight and agility make him a formidable aerial combatant, while his strength and durability ensure his effectiveness in close-quarters combat. Big Chill's resistance to extreme temperatures, radiation, and ability to survive in harsh environments like space and underwater make him a reliable ally in any situation. Despite his vulnerabilities, his numerous strengths and abilities make him a valuable asset in battles against formidable foes."
},
{
  "name": "Echo Echo",
  "image": "https://static.wikia.nocookie.net/ben10/images/9/92/B10R2_%2851%29.png/",
  "description": "Echo Echo possesses the extraordinary ability of sonic screams, capable of emitting audible to ultrasonic frequencies that can shatter steel, redirect projectiles, and damage even Taydenite at the right frequency. He can transmit sound waves through speakers, turning cellphones into weapons. Additionally, Echo Echo can create an unknown number of exact duplicates of himself, with each clone harmoniously coordinated and capable of independent action. Utilizing self-duplication, he can create copies of objects he is holding. By combining his sonic screams and self-duplication, Echo Echo can create force fields, sonic waves, and even a wall of sound capable of dealing massive damage. He can levitate in the air and appears to possess more strength and durability than his size suggests, able to carry heavy objects and withstand impacts. Agile and capable of jumping exceptionally high, Echo Echo can also use his sonic screams for echolocation. However, his sonic screams can harm teammates' ears, and there is a limit to the number of duplicates he can create, depending on his energy reserves. Vulnerable to fire, electricity, and certain attacks, Echo Echo can be rendered unconscious or immobilized in specific situations. Despite his weaknesses, Echo Echo's versatility and power make him a valuable asset in battles against adversaries."
},
{
  "name": "Wildmutt",
  "image": "https://static.wikia.nocookie.net/ben10/images/4/4a/TEN_%28992%29.png/",
  "description": "Wildmutt's primary ability lies in his extraordinary sense of smell, which compensates for his lack of vision. His senses form a radar-like mapping of his environment, allowing him to perceive his surroundings with remarkable clarity, making invisibility ineffective against him. With his heightened olfactory senses, Wildmutt can track almost anything or anyone by their scent, making him an exceptional tracker. Possessing razor-sharp teeth and claws, he can climb vertical surfaces and tear through obstacles effortlessly. Additionally, Wildmutt exhibits enhanced strength, durability, and speed, enabling him to engage formidable adversaries and survive in hazardous environments like Vulpin's sub-zero temperatures. Agile and acrobatic, he can run, jump, and dig at extraordinary speeds, further enhancing his combat prowess. His porcupine-like quills supplement his sensory abilities and can serve as projectiles when he reaches adulthood. However, Wildmutt's communication is limited to barking and snarling, making it challenging for others to understand him. He is vulnerable to high-frequency noises that can overwhelm his senses and render him temporarily stunned. Despite his vulnerabilities, Wildmutt's exceptional sensory abilities and physical prowess make him a formidable and invaluable ally in battles and tracking missions.",
},
{
 "name" : "TerraSpin",
 "image" : "https://static.wikia.nocookie.net/ben10/images/e/ee/VMC_%28328%29.png/",
 "description" : "Terraspin possesses remarkable aerokinetic abilities, allowing him to generate devastating wind blasts and tornadoes. His fins transform into sharp, triangular shapes, while his rotating limbs propel powerful gusts of wind. His shell, although static, releases potent winds and vacuums, enabling him to absorb toxins from the air. Terraspin's wind blasts are forceful enough to extinguish fires and redirect objects, and he can utilize his aerokinetic powers to fly and hover effortlessly. Despite his flipper-like appendages, Terraspin exhibits enhanced dexterity and strength, capable of holding objects and confronting foes with ease. He is immune to poisonous gases and possesses resistance to mana attacks. Additionally, Terraspin can extend his flippers into finger-like claws and wield magical abilities. However, he faces vulnerabilities, including jammed air vents that impede his spinning and susceptibility to ice immobilization and electrical attacks. Despite these weaknesses, Terraspin's powers and resilience make him a formidable ally in battles."
},
{
name: "XLR8",
image: "https://static.wikia.nocookie.net/ben10/images/f/fe/Levin_%28347%29.png",
description: "XLR8 possesses incredible speed and agility, capable of reaching running speeds of 500 miles per hour and accelerating so rapidly that time appears to stop. He can run up walls and on water, withstanding strong winds due to his aerodynamic body. With superhuman reflexes, XLR8 can dodge attacks effortlessly and react swiftly in combat. He can create vortexes, deliver rapid attacks, and exhibit remarkable strength and durability. Additionally, his prehensile tail aids in holding objects, and he has a retractable visor for protection. However, XLR8 is vulnerable to magnets, charged pulses, and electricity. Certain surfaces can impede his speed, and opponents with good reflexes can counter his attacks. Despite his impressive abilities, XLR8 was once defeated by a young Vilgax."

},
{
name: "NRG",
image:"https://static.wikia.nocookie.net/ben10/images/1/1e/SLaTfAtS_%28344%29.png",
description:"NRG possesses the ability to emit highly radioactive energy blasts from the vent in his containment suit, capable of melting metallic objects and ice. He can also channel heat underground to create massive lava geysers. Additionally, NRG exhibits great strength and is immune to radiation and extreme cold environments. In his true form outside the suit, his powers are enhanced, granting flight, intangibility, and energy absorption. He can breathe underwater and grow in size by consuming energy. However, he must stay in his suit to prevent harm to others due to his dangerous radiation levels. Inside the suit, some abilities are weakened, and he can be immobilized by ice. Certain species can resist his radiation, and he is vulnerable to carbon dampening rods."

},
{
name: "Armodrillo",
image:"https://static.wikia.nocookie.net/ben10/images/8/84/TToE_%28171%29.png/",
description:"Armodrillo possesses incredible digging capabilities with his jackhammer arms, transforming them into drills to burrow underground effortlessly. He can collapse buildings with powerful vibrations and create destructive earthquakes by pounding the ground. His enhanced strength allows him to lift heavy objects and withstand attacks, and he can launch shock waves to blast away enemies. Additionally, his armor provides enhanced durability, and he is immune to neuroshock blasts. However, out-of-control vibrations can render him unable to stop, and he is vulnerable to electricity. Despite his formidable abilities, he can be overpowered by certain opponents, such as Slammoids, and suffocated if covered with enough matter. Armodrillo's history includes various battles against foes like Slamworm and Crabdozer, showcasing his prowess in combat."

},
{
name: "SwampFire",
image:"https://static.wikia.nocookie.net/ben10/images/3/37/HEWTL_%28248%29.png/",
description:"Swampfire possesses potent chlorokinesis, enabling him to control and manipulate plant life telepathically, including alien plants. He can generate highly flammable methane gas, which he ignites to unleash fire-based attacks, including fireballs and streams of fire. Swampfire's abilities also include flight through jet propulsion, seed generation for creating vine tentacles, regeneration of lost body parts, and the capability to grow vines with flame tips for offensive maneuvers. Additionally, he exhibits enhanced strength, durability, and the ability to heal others' wounds. However, he is vulnerable to fire extinguishers and water, electricity, ice, and certain chemicals. His methane stench can make stealth difficult, and his body heat can attract heat-seeking opponents. Despite his formidable powers, he initially struggled to control sentient plants but overcame this weakness after 'blossoming'."

},





				// Add more aliens here...
				


				];

                $scope.places = [
				    {name: "Forge of Creation",image: "https://static.wikia.nocookie.net/ben10/images/d/d6/TFOC132.PNG",description: "    Origin of the Forge of Creation:\n    The Forge of Creation is a primordial realm located outside the boundaries of time and space. It is believed to be the birthplace of the universe itself, where cosmic energies converged in a cosmic crucible, giving rise to the first forms of life. Within its ethereal confines, the very essence of existence coalesced, forming the foundation upon which the cosmos was built.\n\n    Celestialsapiens:\n    At the heart of the Forge of Creation resides the Celestialsapiens, an ancient and enigmatic species born from the raw energies of creation. These beings possess unparalleled reality-warping abilities, allowing them to manipulate matter, space, and time with ease. However, the Celestialsapiens' power is tempered by the necessity of a consensus among their multiple personalities, a unique trait that distinguishes them from all other species.\n\n    Spectacular Nature:\n    The Forge of Creation itself is a breathtaking spectacle, a realm of swirling energies and cosmic phenomena. Its landscape is a surreal blend of vibrant colors and celestial wonders, reflecting the raw power and mystique of the Celestialsapiens who call it home. Glowing nebulae and cascading starlight paint the heavens, while ethereal mists shroud ancient mysteries waiting to be unveiled.\n\n    Role in the Universe:\n    As a nexus of cosmic energies, the Forge of Creation exerts a profound influence on the fabric of reality throughout the universe. It is a place of immense significance, revered by many as a source of creation and power. The actions and decisions of the Celestialsapiens, as the guardians of the Forge, have far-reaching consequences, shaping the destiny of worlds and civilizations across the cosmos.\n\n    Guardianship:\n    The Celestialsapiens bear a sacred responsibility as the custodians of the Forge of Creation, entrusted with maintaining the delicate balance of the universe. Their timeless vigil ensures that the cosmic order remains intact, safeguarding against threats that seek to disrupt the harmony of existence. Through their wisdom and stewardship, the Forge endures as a beacon of cosmic light, guiding the destinies of all who dwell within the vast expanse of creation."},
					{name: "Galvan Prime",image: "https://static.wikia.nocookie.net/ben10/images/7/77/UAF_Galvan_Prime_2.png/",description: "Galvan Prime is the home planet of the highly intelligent Galvan species in the Ben 10 series. Located in the Galvan system, this small, rocky planet is renowned for its advanced technology and scientific achievements. The surface of Galvan Prime is dotted with futuristic cities and bustling metropolises, where Galvans conduct research, develop new technologies, and exchange knowledge with other species. Despite its small size, Galvan Prime boasts a rich and diverse ecosystem, teeming with unique flora and fauna adapted to its harsh environmental conditions. At the heart of the planet lies the city of Galvan B, the capital and cultural center of Galvan society. Here, the Galvan High Council governs the planet, overseeing scientific endeavors and diplomatic relations with other civilizations. With its vast intellect and technological prowess, Galvan Prime serves as a beacon of innovation and progress, inspiring awe and admiration among the denizens of the universe."},
					{ name: 'Bellwood', image: 'https://static.wikia.nocookie.net/ben10/images/7/7c/SZTWC_%281%29.png', description: "Bellwood City, a pivotal setting in the Ben 10 series, serves as the primary hometown of protagonist Ben Tennyson. Located in the United States, it offers a rich backdrop for the adventures of Ben, Gwen, and Grandpa Max. As a bustling urban center, Bellwood features diverse neighborhoods, from residential areas to bustling commercial districts. Notable landmarks include Plumber Headquarters, a secretive organization dedicated to protecting Earth from extraterrestrial threats, and Mr. Smoothy, a popular hangout spot for the trio. Bellwood's significance lies in its role as a nexus for both ordinary life and extraordinary encounters, serving as a launching pad for Ben's heroic exploits and alien battles."},
                    { name: 'Null Void', image: 'https://static.wikia.nocookie.net/ben10/images/5/51/WXI2_%281%29.png/', description: "Null Void, an extradimensional prison in the Ben 10 universe, serves as a confining realm for dangerous beings. Existing outside conventional space and time, it's a desolate wasteland characterized by its barren landscapes and ominous atmosphere. With its swirling vortexes and surreal landscapes, the Null Void presents a surreal and foreboding environment. Plumber agents often utilize Null Void technology to contain and imprison intergalactic threats, preventing them from wreaking havoc on Earth. Despite its desolation, the Null Void remains a crucial tool in maintaining peace across the cosmos, serving as a formidable deterrent against those who dare to challenge the forces of order."},
					{name: "Petropia",image: "https://static.wikia.nocookie.net/ben10/images/5/51/Petropia.png/",description: "Petropia is a craggy, geode-like planet, home to Petrosapiens and Crystalsapiens, characterized by jagged crystal formations and underground kingdoms. Its specialized crystals enable hard-light technology, such as Tetrax's X321 Hoverboard. Historically devastated by Vilgax using the Petropia Back-up Crystal, which a young Tetrax had sold to him, the planet was later restored by Ben (as Diamondhead) with Tetrax's help. This restoration involved using the crystal to align with Petropia's suns, reassembling the planet and reviving its inhabitants. Sugilite, a Crystalsapien, now guards the restored Petropia. The planet is larger than Earth and situated in a system with three suns. Notable visitors include Vilgax, Ben, Gwen, and Kevin, highlighting Petropia's significance in the Ben 10 universe."},
                    // Add more places here...
								];





               $scope.events = [
			   {name: 'The Omnitrix Incident',description: "When Ben first stumbled upon the Omnitrix, it marked a pivotal moment in his life and the Ben 10 series. During a summer vacation with his cousin Gwen and their Grandpa Max, Ben inadvertently discovers the powerful alien device. The Omnitrix, resembling a wristwatch-like device, attaches itself to Ben's wrist, forever altering the course of his destiny. Initially unaware of its capabilities, Ben's curiosity leads him to experiment with the Omnitrix, triggering its transformative abilities. This momentous event sets the stage for Ben's extraordinary journey as he embarks on countless adventures across the cosmos, using the Omnitrix to morph into various alien forms and combat threats to Earth and beyond. The discovery of the Omnitrix not only grants Ben incredible powers but also challenges him to embrace his newfound responsibilities as a hero and protector of the universe.",image: "https://static.wikia.nocookie.net/ben10/images/d/d2/OS01_%28Widescreen%29.png/" },
			   {
    name: "The Ghostfreaked Out",
    description: "In one of the episodes of Ben 10, there's a significant event where Zs'Skayr, also known as Ghostfreak, emerges from the Omnitrix. Here's a brief description: The Unveiling of Ghostfreak: During a battle against a powerful enemy, Ben Tennyson transforms into one of his alien forms, Ghostfreak, using the Omnitrix. However, something unexpected happens during the transformation process. Omnitrix Malfunction: As Ghostfreak materializes, Ben realizes that he's unable to control this transformation. The Omnitrix seems to glitch, and Ghostfreak starts to exhibit unusual behavior. Ghostfreak's Rebellion: To Ben's shock, Ghostfreak breaks free from the Omnitrix's control. Instead of obeying Ben's commands, Ghostfreak rebels against him, asserting its own will and intentions. Struggle for Control: Ben finds himself in a precarious situation as he struggles to regain control over Ghostfreak. However, the alien entity proves to be formidable, using its ghostly powers to resist Ben's attempts to subdue it. Consequences of Freedom: With Ghostfreak unleashed, Ben must confront the consequences of this unexpected turn of events. The rebellious alien poses a threat not only to Ben but also to those around him. Race Against Time: As Ghostfreak wreaks havoc, Ben and his allies must race against time to find a way to contain or neutralize the rogue alien before it causes irreparable damage. Lessons Learned: The event serves as a reminder of the risks and challenges associated with wielding the power of the Omnitrix. Ben learns valuable lessons about responsibility, control, and the importance of understanding his alien forms. Resolution: Through determination and quick thinking, Ben eventually manages to reassert control over Ghostfreak, restoring order and preventing further chaos. The experience leaves a lasting impact on Ben, shaping his understanding of the Omnitrix and its capabilities. Overall, the emergence of Ghostfreak from the Omnitrix marks a pivotal moment in Ben's journey, highlighting the complexities of his alien transformations and the challenges he must overcome as a hero.",
    image: "https://static.wikia.nocookie.net/ben10/images/b/b0/Laugh_%281346%29.png"
},
{
name: "Death of Chromastone and Return of DiamondHead",
description:" In the climactic showdown of 'Vengeance of Vilgax: Part 2,' Vilgax delivers a fatal blow to Ben Tennyson's Chromastone, shattering his crystalline form into countless fragments. Yet, from the shattered remnants arises Diamondhead, born from the sacrifice of his fallen comrade. Empowered by Chromastone's remnants, Diamondhead confronts Vilgax with unwavering determination. With each strike, he chips away at Vilgax's defenses, refusing to yield to the overwhelming power of his foe. In a battle that shakes the very foundations of reality, Diamondhead emerges victorious, delivering the decisive blow that sends Vilgax crashing to defeat. As the dust settles, Diamondhead stands triumphant, a symbol of resilience and heroism in the face of adversity.",
image:"https://static.wikia.nocookie.net/ben10/images/0/0a/VoV2_%28599%29.png"

},
{
  name: "Kevin absorbs Ultimatrix",
  description: "Episode Title: The Ultimate Enemy: Part 2\n\nUltimate Aggregor's Ambition: Ultimate Aggregor, a powerful Osmosian villain obsessed with obtaining the five aliens of ultimate power, continues his relentless pursuit of power and domination. Having already absorbed the abilities of four of the five aliens, Aggregor sets his sights on capturing the fifth and final one.\n\nBattle with Ben and Team: Ben Tennyson, along with his friends Gwen and Kevin, confronts Ultimate Aggregor in a fierce battle to prevent him from achieving his nefarious goals. Despite their best efforts, Aggregor proves to be a formidable adversary, using his enhanced abilities to overpower them at every turn.\n\nUltimate Aggregor's Transformation: As the battle reaches its climax, Ultimate Aggregor successfully captures the fifth alien of ultimate power and begins the process of absorbing its abilities. In a dazzling display of energy manipulation, Aggregor undergoes a breathtaking transformation, ascending to an even higher level of power and becoming virtually unstoppable.\n\nKevin's Desperate Act: Faced with the imminent threat posed by Ultimate Aggregor's newfound power, Kevin Levin makes a daring and risky decision. Drawing upon his own abilities as an Osmosian, Kevin absorbs the energy of the Ultimatrix, hoping to gain the power necessary to defeat Aggregor once and for all.\n\nKevin's Transformation: The absorption of the Ultimatrix's power triggers a dramatic transformation in Kevin, as he becomes a living conduit of unimaginable energy. His appearance undergoes a profound change, with his body crackling with pulsating energy as he transcends his previous limitations.\n\nShowdown: With both Kevin and Ultimate Aggregor wielding incredible power, the stage is set for an epic showdown that will determine the fate of the universe. The two adversaries clash in a battle of titanic proportions, their immense energies colliding in a dazzling display of light and power.\n\nResolution: In the climactic finale, Ben and his allies work together to devise a strategy to defeat Ultimate Aggregor and save Kevin from his own destructive impulses. Through courage, teamwork, and sacrifice, they manage to outmaneuver Aggregor and restore Kevin to his senses, averting catastrophe and bringing an end to Ultimate Aggregor's reign of terror.\n\nThis episode is filled with intense action, high-stakes drama, and pivotal character moments, making it a memorable chapter in the Ben 10 saga.",
  image: "https://static.wikia.nocookie.net/ben10/images/5/53/TFOC306.PNG/"
},


{
    name: "Saving the Universe in 'A New Dawn' Episode",
    image: "https://static.wikia.nocookie.net/ben10/images/c/c0/AND_feedback.png/",
    description: "In the climactic finale of Ben 10: Omniverse, titled 'A New Dawn,' Feedback emerges as the key player in saving the universe from impending doom. As the universe faces a catastrophic threat, Ben Tennyson must assemble his team of aliens to confront the villainous Maltruant, who seeks to rewrite history and reshape reality in his own image. With time running out and the fate of the universe hanging in the balance, Ben transforms into Feedback, harnessing the full extent of his energy absorption abilities to counter Maltruant's temporal manipulation. In a pulse-pounding battle that spans across time and space, Feedback channels the combined energies of his allies and unleashes a devastating final blow against Maltruant, thwarting his plans and restoring order to the universe. Through his selfless actions and unwavering determination, Feedback proves to be the ultimate hero, ensuring that a new dawn of hope and possibility emerges for all beings across the cosmos."
},
{
name: "The Highbreed Invasion Finale",
image: "https://static.wikia.nocookie.net/ben10/images/0/01/WotW2_%28541%29.png",
description: "In the 'War of the Worlds: Part 2' episode of Ben 10: Alien Force, the Highbreed fleet arrives on Earth, prompting Ben, Gwen, and Kevin to devise a plan to capture the Highbreed Commander and force a retreat. After battling through Highbreed forces, Ben, as Swampfire, confronts the Commander while Gwen and Kevin fight DNAliens. Kevin is severely injured, leading Gwen to transform into her powerful Anodite form, but Kevin persuades her to revert to avoid losing her humanity. The Plumbers' Helpers and Max return from the Null Void to assist in defeating more DNAliens. Swampfire captures the Commander, who reveals only the Highbreed Supreme can call off the invasion.The team, along with Azmuth, travels to the planet Augstaka to confront the Highbreed Supreme. Captured and imprisoned, Ben transforms into Humungousaur to escape, and they confront the Highbreed Council. Azmuth reveals the Highbreed's genetic purity has caused their sterility and imminent extinction. Ben uses the Omnitrix to repair the Highbreed's genetic damage, mixing their DNA with other species. Initially horrified, the Highbreed are convinced by Reinrassig III to embrace their new genetic diversity. Reinrassig becomes the new Highbreed Supreme and recalls the fleet from Earth.Post-battle, Max mentors the Plumbers' Helpers, Julie heads home, and Ben promises to walk her to school. Darkstar remains at large, and Kevin and Gwen decide to attend an auto show. Paradox returns Azmuth to Galvan Prime. The Omnitrix reboots, unlocking new aliens, and Ben transforms into one of them in the episode's final moment."
},
{
name: "Savior of Petropia",
image: "https://static.wikia.nocookie.net/ben10/images/e/e9/TSoC_%28563%29.png/",
description: "In the episode, Ben, Kevin, and Gwen encounter Tetrax, who demands Ben transform into Chromastone to help resurrect his home planet, Petropia. Tetrax uses a sonic device to reveal Chromastone within Diamondhead and gives him a crucial crystal. Vilgax arrives, demanding the crystal, prompting a chase. The Crystalsapien flies to Petropia's ruins, aligning with the suns to restore the planet. As Vilgax attacks, Ben and the team intervene. Vilgax steals the crystal, but it is drained of power. The dying Crystalsapien grows another crystal for Ben. Ben transforms into Diamondhead, uses the crystal to restore Petropia and its inhabitants, and revives the Crystalsapien, Sugilite. The episode ends with Tetrax planning to confront Vilgax, while Vilgax catches Ben's cold."
},
{
  "name": "Ben 10: Secret of the Omnitrix",
  "image": "https://static.wikia.nocookie.net/ben10/images/5/52/3SOTO_%281378%29.png/",
  "description": "The film follows Ben Tennyson, accompanied by his cousin Gwen and grandfather Max, as they face off against Dr. Animo's nefarious plan to de-evolutionize the world using a DNA bomb. Ben, with the help of his Omnitrix, transforms into various alien heroes to combat Animo's mutant creations and save the day. However, a twist of fate triggers the Omnitrix's self-destruct mode, setting off a race against time to find Azmuth, the Omnitrix's creator, and prevent the universe's destruction. Along the way, Ben confronts his own recklessness and learns the true meaning of heroism and sacrifice. With the fate of the universe hanging in the balance, Ben and his allies must overcome formidable challenges, including encounters with old foes like Vilgax and SixSix. Ultimately, through Gwen's courageous sacrifice and Ben's determination, they succeed in saving the universe and repairing the Omnitrix. The film concludes with the team back on Earth, ready to face new challenges and threats, embodying the enduring spirit of heroism and camaraderie."
},
{
"name": "Benwolf",
"image": "https://static.wikia.nocookie.net/ben10/images/5/56/Benwoof_%28331%29.png/",
"description": "In Arizona, Max visits a Navajo Chief and encounters a sudden storm, unleashing a Navajo werewolf. Ben engages in a battle with the creature and appears to be bitten during the confrontation, leading to a transformation into Benwolf. As the plot unfolds, Ben, Max, and Gwen delve deeper into the mystery surrounding the werewolf's appearance and its connection to the storm. They embark on a journey to uncover the werewolf's true intentions and stop its rampage. Along the way, Ben struggles with his newfound werewolf form and grapples with the consequences of his transformation. The group faces numerous challenges and obstacles, including the revelation that the werewolf is not merely a mythical creature but an alien entity. As they confront the werewolf, Benwolf utilizes his newfound abilities and the unique features of the Omnitrix to battle the creature and protect his friends. Ultimately, they discover the werewolf's ultimate goal and confront it in a climactic showdown. Through courage, determination, and teamwork, they defeat the werewolf and save the day, ensuring the safety of the village and restoring peace to the land."
},
{
  "name": "Zs'Skayr's Return",
  "image": "https://static.wikia.nocookie.net/ben10/images/d/d8/TheReturn.png",
  "description": "Zs'Skayr returns with a sinister plan, accompanied by a mummy, a werewolf, and a Frankenstein-like alien. At the Digby Dairy factory, the Werewolf unearths the Mummy, and the aliens teleport away when confronted. Meanwhile, the Tennysons attempt to thwart their plans. Ben tries to transform into Four Arms but ends up as Stinkfly, engaging in a chaotic battle with a prison bus. Later, at Kennedy Space Center, Ben is attacked by the Werewolf and mistakenly transforms into Benmummy. Max and Gwen witness Dr. Viktor's control of purple lightning and Ben's disappearance. The Tennysons confront the aliens in a junkyard, where Ben, as Cannonbolt, battles the Mummy and Viktor's monstrous form. As Max and Gwen enter Viktor's ship, Ben, as XLR8, fights Viktor but is overpowered. Viktor activates a portal, sucking Ben in while launching the shuttle with Max and Gwen aboard. The shuttle arrives in space with the Mummy, and Zs'Skayr reveals his presence, setting the stage for a climactic showdown."
},
{
  "name": "Hunted",
  "image": "https://static.wikia.nocookie.net/ben10/images/3/3a/Hunted_%281080%29.png/",
  "description": "Three alien bounty hunters - SixSix, Kraab, and Tetrax - are hired by Vilgax to retrieve the Omnitrix. As the Tennysons navigate an obstacle course in the desert, the hunters track them down. Kraab ambushes Ben and Gwen, leading to a confrontation where Ben, as Ghostfreak, temporarily immobilizes Kraab. The Tennysons are then pursued by SixSix, resulting in a fierce battle in a mine. Eventually, Tetrax, a secret agent, intervenes, incapacitates the other hunters, and reveals himself to be of the same species as Diamondhead. Tetrax advises Ben on strategy before departing, leaving behind a grateful Ben and a frustrated Vilgax, who remains determined to acquire the Omnitrix."
},
{
  "name": "Ultimate Sacrifice",
  "image": "https://static.wikia.nocookie.net/ben10/images/7/7b/TUS_%28443%29.png/",
  "description": "Ben faces a crisis when his Ultimatrix becomes sentient, with the alien forms demanding their freedom. As Sentient Ultimate Humungousaur takes control of Ben's body, Gwen and Kevin struggle to help him regain control. Ultimately, Ben sacrifices himself to save both his friends and the sentient Ultimate forms trapped within the Ultimatrix. Through his heroic act, the Ultimates are freed, and Ben's life is spared. Azmuth removes the glitch causing sentience in the Ultimatrix, ensuring that future transformations will reflect Ben's true intentions. The Ultimate forms depart to live peacefully on another planet, and Ben, Gwen, Kevin, and Azmuth reflect on the ordeal, with Kevin extending a gesture of friendship to Ben and Gwen."
},
{
  "name": "Mutant Mayhem",
  "image": "https://static.wikia.nocookie.net/ben10/images/8/8c/Mutant_%28558%29.png/",
  "description": "Dr. Animo escapes from jail and seeks revenge on Ben, coinciding with Ben's accidental alteration of the Omnitrix, resulting in bizarre alien combinations. As Ben struggles with the malfunctioning Omnitrix, Animo's mutant creatures terrorize the swamp during Gator-fest. Animo's plan to mutate the world using the Omnitrix's DNA is thwarted by Ben, Gwen, and Max, with Gwen ultimately reversing the mutations and restoring the Omnitrix. Despite the chaos, Ben remains lighthearted, joking about exploiting the Omnitrix's glitches for fun."
},
{
  "name": "Unlikely Allies",
  "image": "https://static.wikia.nocookie.net/ben10/images/f/f0/AT_%28419%29.png/",
  "description": "Ben is accidentally transported to the desert planet Turrawuste with a Highbreed Commander. Despite their mutual animosity, they must cooperate to survive the planet's dangers. Throughout their journey, Ben learns about the Highbreed's beliefs and struggles to form a connection with the Commander, named Reinrassig III. After several perilous encounters, they reach a teleporter pod, but Reiny chooses to stay behind, deeming himself impure. Ben returns home, saddened by Reiny's decision to self-exile."
},
{
  "name": "Back to School",
  "image": "https://static.wikia.nocookie.net/ben10/images/8/89/Riddance_%281797%29.png/",
  "description": "As summer ends and school begins, Ben struggles to keep his heroic alter ego a secret. However, when Vilgax launches an attack on the school to retrieve the Omnitrix, Ben is forced to reveal his abilities to protect his classmates and family. With the help of his father, Carl, and sister, Gwen, Ben defeats Vilgax and saves the town. Despite initially feeling like a 'zero', Ben earns the respect of his peers and discovers that Gwen has transferred to his school. As they settle in, a new threat emerges as Dr. Animo unleashes mutated animals on the school, prompting Ben to activate the Omnitrix once again.\n\nBesides, This is the last episode of the classic series. It also reminds the kids that the summer holidays are over, and it's time to get back to school as a HERO."
},







    // Add more events here...
];










               $scope.finalBattles = [
    { 
        name: 'Battle against Group of villains', 
        description: `In the final episode of the classic Ben 10 series, titled "The Final Battle: Part 2," Ben Tennyson, in his alien form as Upchuck, faces off against a formidable lineup of classic Ben 10 villains in an epic showdown. Here's a description of the episode:

Setting the Stage: As the ultimate battle unfolds, Ben finds himself confronting some of his most notorious foes from past encounters, including Vilgax, Zs'Skayr (Ghostfreak), Charmcaster, Hex, and Dr. Animo.

Strategic Utilization of Powers: Despite being outnumbered, Ben strategically utilizes Upchuck's unique abilities, including his powerful acid saliva and enhanced durability, to combat the diverse array of villains.

Teamwork and Allies: Throughout the battle, Ben receives assistance from his friends and allies, including Gwen Tennyson, Grandpa Max, and Kevin Levin, who provide support and guidance in the face of overwhelming odds.

Intense Confrontations: Each confrontation with the villains is marked by intense action sequences and strategic maneuvering, as Ben employs a combination of agility, combat skills, and alien powers to gain the upper hand.

Triumphant Victory: Despite the villains' relentless onslaught, Ben's determination and resourcefulness ultimately lead to victory. Through sheer determination and teamwork, Ben and his allies manage to defeat the combined forces of evil, thwarting their nefarious plans and saving the day once again.

Character Growth and Resolution: The final battle serves as a testament to Ben's growth as a hero throughout his journey. It highlights the importance of courage, resilience, and the power of unity in overcoming adversity.

Closure and Reflection: As the dust settles and peace is restored, Ben takes a moment to reflect on his experiences and the lessons he's learned along the way. The episode concludes with a sense of closure and the promise of new adventures on the horizon.

Overall, the final episode encapsulates the essence of the classic Ben 10 series, delivering thrilling action, heartwarming moments, and a satisfying conclusion to Ben's epic journey as a hero.`,
        image: "https://static.wikia.nocookie.net/ben10/images/1/12/Nega_%28564%29.png" 
    },
    {
        name: 'The Vilgax Attack',
        description: `Excited by his new abilities, Ben begins experimenting with the Omnitrix's transformative powers.
        Meanwhile, the ruthless alien warlord Vilgax learns of the Omnitrix's existence and seeks to possess it for his own nefarious purposes.
        Vilgax sends his minion, Kevin 11, to retrieve the Omnitrix, leading to a series of confrontations with Ben and his family.
        Ben faces off against Vilgax in a climactic battle, using his alien forms to combat Vilgax's advanced technology and combat skills.
        Despite Vilgax's relentless pursuit, Ben ultimately prevails, forcing Vilgax to retreat and abandon his plans.
        The encounter serves as a pivotal moment for Ben, reinforcing the importance of using his powers responsibly and protecting the Omnitrix from falling into the wrong hands.
        Ben emerges from the battle with a newfound sense of maturity and purpose, ready to face the challenges that lie ahead as a hero.
        As the episode concludes, Ben's journey as a guardian of the Omnitrix continues, with many more adventures awaiting him in the cosmos.`,
        image : "https://static.wikia.nocookie.net/ben10/images/e/e4/Perfect_%28959%29.png/" 
    },
{
	name: "The Big Tick",
    image: "https://static.wikia.nocookie.net/ben10/images/d/dd/Tick_%28678%29.png/",
    description: "In the 'The Big Tick' episode of Ben 10, a colossal alien tick arrives on Earth with the destructive intent of devouring the planet. As Ben Tennyson transforms into the new alien Cannonbolt for the first time, he faces the daunting task of stopping this monstrous threat. With the help of his grandfather Max and cousin Gwen, Ben must navigate through a series of challenges and confrontations with the tick's worshippers, who believe it to be a divine entity destined to cleanse the planet. Despite the odds stacked against them, Ben perseveres, utilizing his unique alien powers and strategic thinking to combat the tick's devastating effects. As the battle intensifies, Ben's determination and resourcefulness are put to the test, leading to a thrilling showdown between Cannonbolt and the monstrous tick. Through courage, teamwork, and quick thinking, Ben ultimately emerges victorious, saving Earth from certain destruction and earning a newfound respect for his alien abilities."
},		
{
  name: "AlienX Vs Galactic Gladiator",
  description: "In Ben 10: Omniverse, the clash between Alien X and Galactic Gladiator is a cosmic spectacle of immense proportions. These titans collide, causing reality itself to tremble under their power. Alien X, with his reality-warping abilities, confronts Galactic Gladiator's formidable strength and skill. The battlefield transforms into a dazzling display of cosmic energy, with shockwaves rippling across the universe. Despite Alien X's godlike power, Galactic Gladiator proves to be a worthy adversary, matching him blow for blow. The universe's fate hangs in the balance as these cosmic champions vie for supremacy. In a climactic finale, one emerges victorious, leaving an indelible mark on cosmic history. This moment epitomizes the grandeur and scale of Ben 10: Omniverse, captivating audiences with its cosmic spectacle and high-stakes drama.",
  image: "https://static.wikia.nocookie.net/ben10/images/3/31/UVT_%28242%29.png"
},
    { 
        name: 'Ultimate Aggregor showdown', 
		description: "The epic clash between Ultimate Aggregor and Ultimate Kevin unfolds in the dimensional void, a realm where the laws of physics are distorted and reality itself is in flux. Ultimate Aggregor, fueled by his relentless pursuit of power, faces off against Ultimate Kevin, who has absorbed the abilities of the Ultimatrix. Both adversaries are at the peak of their power, unleashing devastating energy blasts and wielding incredible strength. As their titanic battle rages on, the very fabric of the dimensional void trembles under the force of their attacks, creating a spectacle of cosmic proportions. The outcome of this epic showdown remains uncertain, as the fate of the universe hangs in the balance.",
	    image: "https://static.wikia.nocookie.net/ben10/images/e/e0/TFOC286.PNG" 
    },
	{name: "Vilgax's Vicious Vendetta: Albedo's Last Stand",description: "In The Final Battle: Part 1 of Ben 10: Alien Force, the confrontation between Ben and his adversary, Albedo, intensifies dramatically. Albedo's theft of the Ultimatrix and his abduction of Gwen and Kevin propel Ben into a desperate race against time to rescue them. With Vilgax as his ally, Albedo's menace escalates, pushing Ben to his limits. Albedo's mastery of the Ultimatrix grants him unprecedented power, unveiling formidable new transformations like Ultimate Humungousaur. Despite Ben's bravery, he faces overwhelming odds against Albedo's cunning tactics and Vilgax's menacing presence. The episode unfolds with intense action, emotional turmoil, and a pivotal decision as Ben weighs the safety of his friends against the fate of the world.",image: "https://static.wikia.nocookie.net/ben10/images/b/b4/TFB2_%28104%29.png/"},
    {name: "Nemesis Unleashed - Vilgax and Kevin's Vengeance",description: "Back With a Vengeance, the thirteenth and final episode of Ben 10's second season, sees Ben unlocking the Omnitrix's Master Control, granting instant transformations. Vilgax and Kevin join forces to capture Ben and seize the Omnitrix. A confrontation occurs at Niagara Falls, leading to a dramatic showdown. Ben sacrifices the Omnitrix to save Gwen, but Kevin betrays them by forcibly removing it. In the Null Void, Vilgax and Kevin are trapped, while Ben ultimately reclaims the Omnitrix. The episode explores Ben's arrogance and the consequences of power abuse, with Gwen's resourcefulness ultimately saving the day.",image: "https://static.wikia.nocookie.net/ben10/images/9/94/MER_%28377%29.png/"},
	{
"name": "Ghostfreak Battle",
"image": "https://static.wikia.nocookie.net/ben10/images/9/94/Afraid_%281221%29.png/",
"description": "Ben ventures into space to confront Zs'Skayr and Dr. Viktor, who are plotting a catastrophic scheme. As Ben grapples with his adversaries, the Omnitrix unexpectedly transforms him into Grey Matter, forcing him to outwit his foes using his intellect and agility. Meanwhile, Max and Gwen face perilous challenges aboard the shuttle, including a harrowing encounter with the Mummy. As the tension escalates, Ben devises a daring plan to thwart Zs'Skayr's nefarious plot, leading to a series of intense battles and confrontations. With the fate of Earth hanging in the balance, Ben must tap into the full potential of the Omnitrix to overcome formidable adversaries, including the Mummy, Werewolf, and Frankenstein. Through courage, ingenuity, and teamwork, Ben and his allies strive to save humanity from annihilation and restore peace to the galaxy."
},

	// Add more final battles here...
];

$scope.files = [
	{ name: 'Classic theme', src: 'https://raw.githubusercontent.com/deekshith0509/deekshith0509.github.io/main/assets/ben10/Classic.mp3', image: "https://static.wikia.nocookie.net/ben10/images/3/3a/Ben_and_the_aliens_from_the_original_serious.png/", description:  "Ten-year-old Ben Tennyson, his ten-year-old first cousin Gwen, and their paternal Grandpa Max embark on a summer camping trip across the United States. Ben discovers an alien device called the Omnitrix, which permanently attaches to his wrist and grants him the ability to transform into ten unique alien life-forms. Throughout their journey, the trio encounter and combat various villains, while Ben learns to harness the powers of the Omnitrix with the support of Gwen and Max. The show explores themes of heroism, family bonds, and the responsibilities of wielding extraordinary powers."},
	{ name: 'Alien-Force Theme', src: 'https://raw.githubusercontent.com/deekshith0509/deekshith0509.github.io/main/assets/ben10/alienforce.mp3', image: 'https://static.wikia.nocookie.net/ben10/images/7/7d/2KGE8kguLfE.png/', description: "the storyline follows 15-year-old Ben Tennyson, who reclaims his role as a leader after donning the Omnitrix once again. His quest to find his missing Grandpa Max leads him to join forces with his cousin Gwen and former adversary Kevin. Together, they confront the looming threat of the Highbreed while navigating the complexities of the Plumbers' legacy. As Vilgax resurfaces as a formidable antagonist, the stakes heighten, pushing Ben to confront greater challenges. Ultimately, in the series finale, Ben destroys the Omnitrix, only to emerge with a powerful new tool, the Ultimatrix, marking a new chapter in his adventures." },
];
				
				
				
$scope.toggleFile = function (index) {
    // Stop any playing audio except the one being toggled
    var audios = document.querySelectorAll('audio');
    audios.forEach(function (audio, i) {
        if (i !== index) {
            audio.pause();
            audio.currentTime = 0;
        }
    });

    // Toggle playback of the selected audio
    var selectedAudio = document.getElementById('audio-' + index);
    if ($scope.activeFile === index) {
        selectedAudio.pause();
		selectedAudio.currentTime = 0; // Pause if already active
    } else {
        selectedAudio.play(); // Play if not active
    }

    $scope.activeFile = $scope.activeFile === index ? -1 : index;
	                    if ($scope.activeCharacter === index) {
                        $scope.activeCharacter = -1; // Collapse if already expanded
                    } else {
                        $scope.activeCharacter = index; // Expand if collapsed
                    }	
};







$scope.videos = [
    {
        name: "CLassic themeMusic",
        src: "https://raw.githubusercontent.com/deekshith0509/deekshith0509.github.io/main/assets/ben10/classicv.mp4",
        type: "github",
		description: "The Ben 10 theme song sets an energetic and dynamic tone for the series, highlighting Ben's transformations with evolving visuals and music that maintains its spirited essence. This iconic music is featured in every episode and related media, solidifying its memorable status in the franchise."
		},
    {
        "name": "Ben 10 S01 E01",
        "src": "https://drive.google.com/file/d/1PlSzbZ90N8HZYaAalEgHAqrvxKbqTh9T/preview",
        "type": "iframe",
        "description": "Season 1 - Episode 1"
    },
    {
        "name": "Ben 10 S01 E02",
        "src": "https://drive.google.com/file/d/1qYSD3cDjWU0MtC0vzETmoc1RVcEl4kDF/preview",
        "type": "iframe",
        "description": "Season 1 - Episode 2"
    },
    {
        "name": "Ben 10 S01 E03",
        "src": "https://drive.google.com/file/d/1UL2A91CCMzI7JuDIhGkWUSUkUEInxgX-/preview",
        "type": "iframe",
        "description": "Season 1 - Episode 3"
    },
    {
        "name": "Ben 10 S01 E04",
        "src": "https://drive.google.com/file/d/1dpWw97b0GFOjYAcdLs5GaMzxkWlCDiCI/preview",
        "type": "iframe",
        "description": "Season 1 - Episode 4"
    },
    {
        "name": "Ben 10 S01 E05",
        "src": "https://drive.google.com/file/d/12Aq1BVSXyrr3nbFKnhgZPoG_96jThTsy/preview",
        "type": "iframe",
        "description": "Season 1 - Episode 5"
    },
    {
        "name": "Ben 10 S01 E06",
        "src": "https://drive.google.com/file/d/1IZpofLwTPrX1RTqR3L1mp-mfA_1Bhfo8/preview",
        "type": "iframe",
        "description": "Season 1 - Episode 6"
    },
    {
        "name": "Ben 10 S01 E07",
        "src": "https://drive.google.com/file/d/1l8luOTb6C9NeVQ5LN-qoJD4vSw_-UG6X/preview",
        "type": "iframe",
        "description": "Season 1 - Episode 7"
    },
    {
        "name": "Ben 10 S01 E08",
        "src": "https://drive.google.com/file/d/1vRwEy0ymxMmMPBkS9vExSr4IIe2e03-i/preview",
        "type": "iframe",
        "description": "Season 1 - Episode 8"
    },
    {
        "name": "Ben 10 S01 E09",
        "src": "https://drive.google.com/file/d/1ygunjiX3lw7yxXKVVY_NbE31s4ZejYt1/preview",
        "type": "iframe",
        "description": "Season 1 - Episode 9"
    },
    {
        "name": "Ben 10 S01 E10",
        "src": "https://drive.google.com/file/d/19hi4BL-CZGKpBMeskRDxsvmNjxVfjSTU/preview",
        "type": "iframe",
        "description": "Season 1 - Episode 10"
    },
    {
        "name": "Ben 10 S01 E11",
        "src": "https://drive.google.com/file/d/1orxE6QcfT3P8LaswbBb1NbIY5r-Fiu4u/preview",
        "type": "iframe",
        "description": "Season 1 - Episode 11"
    },
    {
        "name": "Ben 10 S01 E12",
        "src": "https://drive.google.com/file/d/1bA9mDmE2YJ6heBFck4bW9aInFtHJXtPf/preview",
        "type": "iframe",
        "description": "Season 1 - Episode 12"
    },
    {
        "name": "Ben 10 S01 E13",
        "src": "https://drive.google.com/file/d/19c2fcZwfw-W3WCzBGTAjdHR1l1rfI52E/preview",
        "type": "iframe",
        "description": "Season 1 - Episode 13"
    },
    {
        "name": "Ben 10 S02 E01",
        "src": "https://drive.google.com/file/d/11isvzNFjx-_r3KvlA_jNZ3Xn2898Ac_Z/preview",
        "type": "iframe",
        "description": "Season 2 - Episode 1"
    },
    {
        "name": "Ben 10 S02 E02",
        "src": "https://drive.google.com/file/d/1w8jmVa1F_ubay8-P4HurIk5Jo0odIq9U/preview",
        "type": "iframe",
        "description": "Season 2 - Episode 2"
    },
    {
        "name": "Ben 10 S02 E03",
        "src": "https://drive.google.com/file/d/1kWZy-RKvGNEQ7xBmfYb8fZ8pU-ysypy3/preview",
        "type": "iframe",
        "description": "Season 2 - Episode 3"
    },
    {
        "name": "Ben 10 S02 E04",
        "src": "https://drive.google.com/file/d/1ku_XMfQtP_JxCwj9dq6yigoGC8dRTtP3/preview",
        "type": "iframe",
        "description": "Season 2 - Episode 4"
    },
    {
        "name": "Ben 10 S02 E05",
        "src": "https://drive.google.com/file/d/17dWHsRHjd6GQB5p_59hruANcut2TSMN7/preview",
        "type": "iframe",
        "description": "Season 2 - Episode 5"
    },
    {
        "name": "Ben 10 S02 E06",
        "src": "https://drive.google.com/file/d/1WQVzCy2tNME1KJx4rtUQ_jU1Y_r5nk5k/preview",
        "type": "iframe",
        "description": "Season 2 - Episode 6"
    },
    {
        "name": "Ben 10 S02 E07",
        "src": "https://drive.google.com/file/d/1nCKhtth7Rus8zASGjw9T4-9dXbmAB2rg/preview",
        "type": "iframe",
        "description": "Season 2 - Episode 7"
    },
    {
        "name": "Ben 10 S02 E08",
        "src": "https://drive.google.com/file/d/1nURSQLSvy8BU6wNlF-lf3JxlIjGS9Fs6/preview",
        "type": "iframe",
        "description": "Season 2 - Episode 8"
    },
    {
        "name": "Ben 10 S02 E09",
        "src": "https://drive.google.com/file/d/1YUiLNqVU4-8avDD1mpLXlG1GR_hDTCWp/preview",
        "type": "iframe",
        "description": "Season 2 - Episode 9"
    },
    {
        "name": "Ben 10 S02 E10",
        "src": "https://drive.google.com/file/d/1uGvLECyEwAyf2l8zaTKU9HJlIBH5cHb9/preview",
        "type": "iframe",
        "description": "Season 2 - Episode 10"
    },
    {
        "name": "Ben 10 S02 E11",
        "src": "https://drive.google.com/file/d/1rT_snAeNdOucdnayY1xzSD2LMhx-Ee37/preview",
        "type": "iframe",
        "description": "Season 2 - Episode 11"
    },
    {
        "name": "Ben 10 S02 E12",
        "src": "https://drive.google.com/file/d/1zc6U8iznGmuWIPVNA_NmLNM2fTV7eCWX/preview",
        "type": "iframe",
        "description": "Season 2 - Episode 12"
    },
    {
        "name": "Ben 10 S02 E13",
        "src": "https://drive.google.com/file/d/18UvneT71skSHKfvJxRZgX1ES6Vj8C4v1/preview",
        "type": "iframe",
        "description": "Season 2 - Episode 13"
    },
    {
        "name": "Ben 10 S03 E01",
        "src": "https://drive.google.com/file/d/1AhTDtfEmCuM3SLs3RgS_ch7fQlLfKKNA/preview",
        "type": "iframe",
        "description": "Season 3 - Episode 1"
    },
    {
        "name": "Ben 10 S03 E02",
        "src": "https://drive.google.com/file/d/1aQ3sHgaMRBF94PPeM-XqgWE7eBoo9c1c/preview",
        "type": "iframe",
        "description": "Season 3 - Episode 2"
    },
    {
        "name": "Ben 10 S03 E03",
        "src": "https://drive.google.com/file/d/1lpodGx4srucnTBAwfwLSSDKCfTZevvx7/preview",
        "type": "iframe",
        "description": "Season 3 - Episode 3"
    },
    {
        "name": "Ben 10 S03 E04",
        "src": "https://drive.google.com/file/d/1s0ZBQgXIwSj3l-m2A98cdfq_gWjZdOCV/preview",
        "type": "iframe",
        "description": "Season 3 - Episode 4"
    },
    {
        "name": "Ben 10 S03 E05",
        "src": "https://drive.google.com/file/d/1y5x0MA042Z1y7UGvEpHwrjQsPbJAsXv7/preview",
        "type": "iframe",
        "description": "Season 3 - Episode 5"
    },
    {
        "name": "Ben 10 S03 E06",
        "src": "https://drive.google.com/file/d/1_15OHsPTVKocU0t5KjLstwke6seabyIi/preview",
        "type": "iframe",
        "description": "Season 3 - Episode 6"
    },
    {
        "name": "Ben 10 S03 E07",
        "src": "https://drive.google.com/file/d/16csmtoZ3D0I_5-TAtOuhED0Aa8vfxaod/preview",
        "type": "iframe",
        "description": "Season 3 - Episode 7"
    },
    {
        "name": "Ben 10 S03 E08",
        "src": "https://drive.google.com/file/d/1maYJI0vjs5Rr5SuzgFA_mQi8VNzwlARK/preview",
        "type": "iframe",
        "description": "Season 3 - Episode 8"
    },
    {
        "name": "Ben 10 S03 E09",
        "src": "https://drive.google.com/file/d/1PxI9H3WX6Jt6pukQprfNBSaLHEpCYuZx/preview",
        "type": "iframe",
        "description": "Season 3 - Episode 9"
    },
    {
        "name": "Ben 10 S03 E10",
        "src": "https://drive.google.com/file/d/13giBCwtQzqgoMOPL84vEsnMFqFhfplNw/preview",
        "type": "iframe",
        "description": "Season 3 - Episode 10"
    },
    {
        "name": "Ben 10 S03 E11",
        "src": "https://drive.google.com/file/d/1EUg3aFEvdjZQS2U6EcKbF9WUhHVY0Il-/preview",
        "type": "iframe",
        "description": "Season 3 - Episode 11"
    },
    {
        "name": "Ben 10 S03 E12",
        "src": "https://drive.google.com/file/d/1mapcpPjv1idYoY40s4tR8RC7p7GX3pNK/preview",
        "type": "iframe",
        "description": "Season 3 - Episode 12"
    },
    {
        "name": "Ben 10 S03 E13",
        "src": "https://drive.google.com/file/d/1gnAH3Bnv9SGOuUO8sr2Fyo-5Jf6voyg_/preview",
        "type": "iframe",
        "description": "Season 3 - Episode 13"
    },
    {
        "name": "Ben 10 S04 E01",
        "src": "https://drive.google.com/file/d/18s2codQWeJUdtg6dTA5z67GJz87UZdzl/preview",
        "type": "iframe",
        "description": "Season 4 - Episode 1"
    },
    {
        "name": "Ben 10 S04 E02",
        "src": "https://drive.google.com/file/d/19EMJ3giRw4mqhjM-x6e2Jpd5c1GXghnn/preview",
        "type": "iframe",
        "description": "Season 4 - Episode 2"
    },
    {
        "name": "Ben 10 S04 E03",
        "src": "https://drive.google.com/file/d/18XEtjdgfx09ZukEkTuTu43J0MNYUfCVO/preview",
        "type": "iframe",
        "description": "Season 4 - Episode 3"
    },
    {
        "name": "Ben 10 S04 E04",
        "src": "https://drive.google.com/file/d/19xk6aDgGhLj7t1c928S2PHFrP39RZHeI/preview",
        "type": "iframe",
        "description": "Season 4 - Episode 4"
    },
    {
        "name": "Ben 10 S04 E05,6,7",
        "src": "https://drive.google.com/file/d/1uwcw84DtKXmPJ2Jlii5Ve5ZT-857crBh/preview",
        "type": "iframe",
        "description": "Season 4 - Episodes 5, 6, 7"
    },
    {
        "name": "Ben 10 S04 E08",
        "src": "https://drive.google.com/file/d/18Y_1f4lOVc403TDLporkBeaj4G1apzuw/preview",
        "type": "iframe",
        "description": "Season 4 - Episode 8"
    },
    {
        "name": "Ben 10 S04 E09",
        "src": "https://drive.google.com/file/d/1dlj49kmVn0LF2b_ZMVlFXUDssnhWoRVO/preview",
        "type": "iframe",
        "description": "Season 4 - Episode 9"
    },
    {
        "name": "Ben 10 S04 E10",
        "src": "https://drive.google.com/file/d/1SuCwmsGXEO2msiCYgu5b7m0xSZEeozPZ/preview",
        "type": "iframe",
        "description": "Season 4 - Episode 10"
    },
    {
        "name": "Ben 10 S04 E11",
        "src": "https://drive.google.com/file/d/14mxfGuuZXhm7nkbYbLoENJVGlk5KmW4e/preview",
        "type": "iframe",
        "description": "Season 4 - Episode 11"
    },
    {
        "name": "Ben 10 S04 E12",
        "src": "https://drive.google.com/file/d/1K0uEzkvYwm1WIH55X6uSi769JM9Ikv4d/preview",
        "type": "iframe",
        "description": "Season 4 - Episode 12"
    },
    {
        "name": "Ben 10 S04 E13",
        "src": "https://drive.google.com/file/d/1yux__CUCOjdkoMrVqRqavIBI_7TkEM4n/preview",
        "type": "iframe",
        "description": "Season 4 - Episode 13"
    }
];


$scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
};







$scope.showSection = function (section) {
    // Pause all audio elements
    document.querySelectorAll('audio').forEach(function (audio) {
        audio.pause();
		audio.currentTime = 0;
    });
	 document.querySelectorAll('video').forEach(function (video) {
        video.pause();
		video.currentTime = 0;
    });
 //uncomment this to pause audio when switching between the sections..
    // Reset the activeCharacter index to collapse all subsections
    $scope.activeCharacter = -1;
	$scope.activeFile = -1;
	$scope.activeVideo=-1;


    // Hide all sections
    document.querySelectorAll('.section').forEach(function (el) {
        el.classList.remove('active');
    });

    // Show selected section
    document.getElementById(section + 'Section').classList.add('active');

    // Set current section for highlighting in the menu
    $scope.currentSection = section;
};



 $scope.toggleSubSection = function (index) {
                    if ($scope.activeCharacter === index) {
                        $scope.activeCharacter = -1; // Collapse if already expanded
                    } else {
                        $scope.activeCharacter = index; // Expand if collapsed
                    }
                };
// Initially show characters section
$scope.showSection('characters');
				
				
				
$scope.keyDownHandler = function(event) {
    // Check for specific key combinations
    if (event.key === 'a' && event.ctrlKey) {
        // Switch to aliens section
        $scope.showSection('aliens');
        event.preventDefault();
    } else if (event.key === 'e' && event.ctrlKey) {
        // Switch to events section
        $scope.showSection('events');
        event.preventDefault();
    } else if (event.key.toLowerCase() === 'c' && event.ctrlKey) {
        // Switch to characters section
        $scope.showSection('characters');
        event.preventDefault();
    } else if (event.key.toLowerCase() === 'p' && event.ctrlKey) {
        // Switch to places section
        $scope.showSection('places');
        event.preventDefault();
    } else if (event.key.toLowerCase() === 'b' && event.ctrlKey) {
        // Switch to final battles section
        $scope.showSection('finalBattles');
        event.preventDefault();
    } else if (event.key.toLowerCase() ==="m" && event.ctrlKey){
        $scope.showSection("files");
        event.preventDefault();
    } else if (event.key.toLowerCase() === "v" && event.ctrlKey){
        // Switch to videos section
        $scope.showSection("videos");
        event.preventDefault();                
    }
    // Check if the pressed key is 1 and Ctrl key is pressed
    else if (event.key === '1' && event.ctrlKey) {
        // First, switch to videos section
        $scope.showSection("videos");
        // Then, switch to classic sub-section within videos section
        $scope.showSeason('classic');
        event.preventDefault();
    }
    // Check if the pressed key is 2 and Ctrl key is pressed
    else if (event.key === '2' && event.ctrlKey) {
		// First, switch to videos section
        $scope.showSection("videos");
        // Switch to alienforce section
        $scope.showSeason('alienforce');
        event.preventDefault();
    }
    // Check if the pressed key is 3 and Ctrl key is pressed
    else if (event.key === '3' && event.ctrlKey) {
		// First, switch to videos section
        $scope.showSection("videos");
        // Switch to ultimatealien section
        $scope.showSeason('ultimatealien');
        event.preventDefault();
    }
};



            }]);
			angular.element(document).ready(function () {
        angular.element(document).on('keydown', function (event) {
            angular.element(document.body).scope().keyDownHandler(event);
        });
    });
			
			   function refreshpage() {
		window.scrollTo(0,0);
            location.reload(); // Reload the entire page
        }


        // Function to display the message for a specific time
        function showMessageForTime() {
            var messageElement = document.getElementById('message');
            messageElement.style.display = 'block'; // Show the message
            
            // Hide the message after 5 seconds (5000 milliseconds)
            setTimeout(function () {
                messageElement.style.display = 'none'; // Hide the message
            }, 3000);
        }

        // Call the function when the page is loaded
        window.onload = function () {
            showMessageForTime();
        };
		document.body.style.overflowX = 'hidden';

		