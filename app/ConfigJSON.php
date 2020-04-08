<?php

namespace App;

use App;
use Illuminate\Database\Eloquent\Model;
use Request;

class ConfigJSON extends Model
{
    public static function getRoutes(){
      $routes = [
          "about" => [
              "link" => route('about'),
              "title" => __('static.about us'),
              "active" => Request::is('about') ? 'active' : ''
          ],
          "contacts" => [
              "link" => route('contacts'),
              "title" => __('static.contacts'),
              "active" => Request::is('contacts') ? 'active' : ''
          ],
          "gallery" => [
              "link" => route('gallery'),
              "title" => __('static.gallery'),
              "active" => Request::is('gallery') ? 'active' : ''
          ],
          "media" => [
              "title" => __('static.media'),
          ],
          "home" => [
              "link" => route('home'),
              "title" => __('static.home'),
              "active" => Request::is('home') ? 'active' : ''
          ]
      ];
      $locale = [
          "en" => [
              "link" => "lang/eng",
              "title" => "EN",
              "img" => asset('omnivus/images/flag-1.jpg')
          ],
          "ru" => [
              "link" => "lang/ru",
              "title" => "RU",
              "img" => asset('omnivus/images/flag-2.jpg')
          ]
      ];


      return json_encode($routes);
    }

    public static function getLocale(){
      $locale = [
          "en" => [
              "link" => "lang/eng",
              "title" => "EN",
              "img" => asset('omnivus/images/flag-1.jpg')
          ],
          "ru" => [
              "link" => "lang/ru",
              "title" => "RU",
              "img" => asset('omnivus/images/flag-2.jpg')
          ]
      ];

      switch (App::getLocale()) {
        case "en":
          $locale = [
              "link" => "/lang/ru",
              "title" => "RU",
              "img" => asset('omnivus/images/flag-2.jpg')
          ];
          break;
        case "ru":
          $locale = [
              "link" => "/lang/en",
              "title" => "EN",
              "img" => asset('omnivus/images/flag-1.jpg')
          ];
          break;
      }

      return json_encode($locale);
    }
}
