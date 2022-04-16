---
# layout: post
author: luke_chi
title:  "Firebase Auth"
date:   2018-03-13 09:40:57 +0800
categories: firebase
tags: 
---

Empty email field of Firebase Auth User using Login Integration

<https://stackoverflow.com/questions/37522582/empty-email-field-of-firebase-auth-user-using-facebook-login-integration-fireba>

= "Allow creation of multiple accounts with the same email address" =

after reading post in firebase-talk google group here https://groups.google.com/forum/#!topic/firebase-talk/gPGNq-IkTLo, I found out the answer. The issue was happened because I'm using "Allow creation of multiple accounts with the same email address" in Firebase Auth sign-in method.

So I change the option into: "Prevent creation of multiple accounts with the same email address" can it's working properly now. It's simple as that. It's true I need more logic to merge accounts having the same email address, but it's okay.

Maybe everyone else having the same issue, can also try this, and hopefully it's solved as well.


