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
              "title" => __('static.about'),
              "link" => "#",
              "active" => Request::is('about*') ? 'active' : '',
              "children" => [
                  [
                      "title" => __('static.about_us'),
                      "link" => route('about'),
                      "active" => Request::is('about/aboutus') ? true : false,
                  ],
                  [
                      "title" => __('static.topics'),
                      "link" => route('topics'),
                      "active" => Request::is('about/topics') ? true : false,
                  ],
                  [
                      "title" => __('static.committee'),
                      "link" => route('committee'),
                      "active" => Request::is('about/committee') ? true : false,
                  ],
                  [
                      "title" => __('static.presenters'),
                      "link" => route('presenters'),
                      "active" => Request::is('about/presenters') ? true : false,
                  ],
              ]
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
                  [
                      "title" => __('static.gallery'),
                      "link" => route('gallery'),
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

      if(\Auth::user()){
        $title = __('static.personal_cabinet');
        $url = route('personal_cabinet');
      }else{
        $title = __('static.sign_in')." \\ ".__('static.sign_up');
        $url = route('login');
      }

      $data = [
          "logo" => asset('omnivus/images/logo-2.png'),
          "cabinet" => [
              "title" => $title,
              "url" => $url
          ]
      ];
      return json_encode($data);
    }
}
