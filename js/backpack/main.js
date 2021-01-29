examDate = null
submitAnnouncememntListenerAdded = false
submitDeadlineListenerAdded = false
submitDeadlineReminderListenerAdded = false
let observer = new MutationObserver((mutations) => {
    let url = window.location.toString()
    var urlComp = url.split('/')
    if (urlComp[4] == "courses" && urlComp[6] == "deadlines") {
        if (document.getElementById('new_deadline') !== null) {
            updated = true
            updateDom()
        } else {
            updated = false
        }
    }
    alertBannerPrepared = false
    if (urlComp[4] == "courses" && urlComp[6].substring(0, 13) == "announcements") {
        updateDomAnnouncements()
    }

    if(document.getElementById('submitannouncememnt')) {
        if(!submitAnnouncememntListenerAdded) {
            submitAnnouncememntListenerAdded = true
            submitAnnouncememntButton = document.getElementById('submitannouncememnt')
            submitAnnouncememntButton.addEventListener("click", ()=>{
                console.log(examDate)
                if(examDate) {
                    informAboutQuiz(examDate)
                }
            })
        }
    } else {
        submitAnnouncememntListenerAdded = false
    }


    if(document.getElementById('submitdeadline')) {
        if(!submitDeadlineListenerAdded) {
            submitDeadlineListenerAdded = true
            submitDeadlineButton = document.getElementById('submitdeadline')
            submitDeadlineButton.addEventListener("click", ()=>{
                console.log(examDate)
                if(examDate) {
                    informAboutDeadline(examDate)
                }
            })
        }
    } else {
        submitDeadlineListenerAdded = false
    }

    if(document.getElementById('addReminder')) {
        if(!submitDeadlineReminderListenerAdded) {
            submitDeadlineReminderListenerAdded = true
            submitDeadlineReminderButton = document.getElementById('addReminder')
            submitDeadlineReminderButton.addEventListener("click", ()=>{
                console.log(examDate)
                if(examDate) {
                    informAboutDeadlineReminder(examDate)
                }
            })
        }
    } else {
        submitDeadlineReminderListenerAdded = false
    }


    if(document.getElementById('examdate')) {
        examDate = document.getElementById('examdate').value
    } else {
        examDate = null
    }
})

observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    characterData: true,
})

