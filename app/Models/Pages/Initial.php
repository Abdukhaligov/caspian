<?php

namespace App\Models\Pages;

use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;
use App;
use Auth;
use Request;
use Storage;

class Initial extends Model {

  protected $table = 'page_initial';


  public static function getData() { return self::first(); }

  public static function getRoutes() {
    $registerUrl = Auth::user() ? route('cabinet') : route('register') . "/?speaker=2";

    $routes = [
        [
            //"title" => App\Models\Pages\Home::first()->title,
            "title" => "Home",
            "link" => route('home'),
            "active" => Request::url() == route('home') ? true : false,
        ],
        [
            "title" => __('static.about'),
            "link" => "#",
            "active" => Request::is('about*') ? true : false,
            "children" => [
                [
                    //"title" => App\Models\Pages\AboutUs::first()->title,
                    "title" => "About Us",
                    "link" => route('about'),
                    "active" => Request::url() == route('about') ? true : false,
                ],
                [
                    //"title" => App\Models\Pages\Topics::first()->title,
                    "title" => "Topics",
                    "link" => route('topics'),
                    "active" => Request::url() == route('topics') ? true : false,
                ],
                [
                    "title" => "Committee",
                    "link" => route('committee'),
                    "active" => Request::url() == route('committee') ? true : false,
                ],
                [
                    //"title" => App\Models\Pages\Speakers::first()->title,
                    "title" => "Speakers",
                    "link" => route('speakers'),
                    "active" => Request::url() == route('speakers') ? true : false,
                ],
                [
                    "title" => "Program",
                    "link" => route('program'),
                    "active" => Request::url() == route('program') ? true : false,
                ],

            ]
        ],
        [
            "title" => "Registration",
            "link" => $registerUrl
        ],
        [
            //"title" => App\Models\Pages\News::first()->title,
            "title" => "News",
            "link" => route('news'),
            "active" => Request::url() == route('news') ? true : false,
        ],
        [
            "title" => __('static.media'),
            "link" => "#",
            "active" => Request::is('media*') ? true : false,
            "children" => [
                [
                    //"title" => App\Models\Pages\Gallery::first()->title,
                    "title" => "Gallery",
                    "link" => route('gallery'),
                    "active" => Request::url() == route('gallery') ? true : false,
                ],
                [
                    //"title" => App\Models\Pages\AbstractBook::first()->title,
                    "title" => "Abstract Books",
                    "link" => route('abstractBook'),
                    "active" => Request::url() == route('abstractBook') ? true : false,
                ],
            ]
        ],
        [
            //"title" => App\Models\Pages\Contacts::first()->title,
            "title" => "Contacts",
            "link" => route('contacts'),
            "active" => Request::url() == route('contacts') ? true : false,
        ],
    ];

    return $routes;
  }


}
