---
# layout: post
author: luke_chi
title:  "Billing for Maps"
date:   2019-03-01 09:40:57 +0800
categories: map
tags:
---

[understanding-cost-of-use](https://developers.google.com/maps/billing/understanding-cost-of-use){:target="_blank"}
[premium-maps-terms](https://enterprise.google.com/maps/terms/amer/premium-maps-terms.html){:target="_blank"}

Understanding Billing for Maps, Routes, and Places

* “SKU” means stock keeping unit, a unique identifier for each distinct service that Customer can purchase under an Agreement.
* stock keeping unit，SKU/ˌɛsˌkeɪˈjuː/，存貨單位也翻譯為庫存單元，是一個會計學名詞，定義為庫存管理中的最小可用單元，而在連鎖零售門店中有時稱單品為一個SKU <https://zh.wikipedia.org/wiki/存货单位/>

## Pay-As-You-Go Pricing
* To estimate your monthly bill under the pay-as-you-go pricing model, use our pricing calculator [pricing calculator](https://mapsplatformtransition.withgoogle.com/calculator){:target="_blank"}.

* Reminder: To use the Google Maps Platform APIs, you must enable billing on each of your projects.

## Overview of billing for the Google Maps Platform products
* Usage is tracked for each Product SKU.
* A SKU is the combination of the Product API + the service or function called (for example, Places API - Place Details).
* A product may have multiple SKUs billed at different rates, for example:
  * Places API - Place Details;
  * Places API - Autocomplete - Per Request
* SKU pricing is tiered, based on volume of use, with three tiers: 0–100,000; 100,001–500,000; 500,001+.
* Cost is calculated by SKU Usage x Price per each use.
* For each billing account, for qualifying Google Maps Platform SKUs, a $200 USD Google Maps Platform "credit"!! is available each month, and automatically applied to the qualifying SKUs.
  * Note: The credit does not apply to our gaming, ridesharing, or asset tracking industry solutions. Contact Us for more information.
* When you view your billing report, each line item lists Cost Before Credit, Credit, and Cost After Credit.

## View your billing report

1. Go to the [Google Maps section](https://cloud.google.com/console/google/maps-apis/overview){:target="_blank"} in the Google Cloud Platform Console.
2. On the Overview page, in the Billing card, select Go to Maps billing report.

## How to read the billing report chart

### Tip: Analyze the usage and cost per SKU

### Monitor and restrict consumption

### Related resources

* Managing your billing accounts
* Modify a project's billing settings
* Viewing your cost trends with billing reports
* Setting budgets and alerts
* Optimization Guide for Google Maps Platform
* API Key Best Practices

## Nonprofit, crisis response, and news media organization grants

## Detailed pricing information per product SKU

* To estimate your monthly bill under the pay-as-you-go pricing model, use our pricing calculator [pricing calculator](https://mapsplatformtransition.withgoogle.com/calculator){:target="_blank"}.

## Maps product

APIs in Maps include: Maps SDK for Android; Maps SDK for iOS; Maps JavaScript API; Maps Static API; Street View Static API; Maps Embed API; and Maps URLs.

With the pay-as-you-go pricing, the creation of a Street View panorama is no longer charged as a Mobile Native map load. It is charged as a Dynamic Street View (see below).

### SKU: Mobile Native Static Maps
<span style="color:green">**All Free**</span>: Includes a Google map object in lite mode, in a Maps SDK for Android mobile application.

### SKU: Mobile Native Dynamic Maps
<span style="color:green">**All Free**</span>: A Google map object in a Maps SDK for Android or Maps SDK for iOS mobile application.

### SKU: Embed (html iframe)
<span style="color:green">**All Free**</span>: uses Place mode (to embed a map with a marker) or View mode (to embed a simple map)

### SKU: Embed Advanced
<span style="color:red">**Not Free**</span>: uses the Directions mode, Street View mode, or Search mode

### SKU: Static Maps (html <img>)
<span style="color:red">**Not Free**</span>: 

### SKU: Dynamic Maps
<span style="color:red">**Not Free**</span>: A web page or application that displays a map using the Maps JavaScript API. A map is created with the google.maps.Map() class.

### SKU: Static Street View (html iframe)
<span style="color:red">**Not Free**</span>: 

### SKU: Dynamic Street View
A dynamic Street View panorama is charged for each instantiation of a panorama object in a Maps JavaScript API, Maps SDK for Android, Maps SDK for iOS application.

<span style="color:red">**Not Free**</span>: An instantiation of a panorama object occurs when doing the following: 
* In JavaScript, with the google.maps.StreetViewPanorama() class or Map.getStreetView() method. Usage of the StreetViewService() class is not charged.
* On Android, with one of StreetViewPanoramaFragment, SupportStreetViewPanoramaFragment, or StreetViewPanoramaView classes. A panorama is counted each time the related onCreate() method is called.
* On iOS, with the GMSPanoramaView object.

## Routes product

## Places product

## 

## 

## 

## 

## 

## 

## 

## 

## 

## 

## 

## 

## 

## 

## 

## 

## 

## 

## 

## 

## 

## 

## 

