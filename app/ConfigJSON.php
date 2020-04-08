<?php

namespace App;

use App;
use Illuminate\Database\Eloquent\Model;
use Request;

class ConfigJSON extends Model
{
    public static function getRoutes(){
      $routes = [
          [
              "title" => __('static.home'),
              "link" => route('home'),
              "active" => Request::is('home') ? 'active' : ''
          ],
          [
              "title" => __('static.about us'),
              "link" => route('about'),
              "active" => Request::is('about') ? 'active' : ''
          ],
          [
              "title" => __('static.contacts'),
              "link" => route('contacts'),
              "active" => Request::is('contacts') ? 'active' : ''
          ],
          [
              "title" => __('static.media'),
              "link" => "#",
              "active" => Request::is('gallery') ? 'active' : '',
              "children" => [
                  "gallery" => [
                      "title" => __('static.gallery'),
                      "link" => route('gallery'),
                      "active" => Request::is('gallery') ? 'active' : ''
                  ],
              ]
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

    public static function getData(){
      $data = [
          "logo" => asset('omnivus/images/logo-2.png')
      ];
      return json_encode($data);
    }
}
