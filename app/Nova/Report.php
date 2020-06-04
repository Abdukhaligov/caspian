<?php

namespace App\Nova;

use Illuminate\Http\Request;
use Laravel\Nova\Actions\Action;
use Laravel\Nova\Fields\BelongsTo;
use Laravel\Nova\Fields\DateTime;
use Laravel\Nova\Fields\File;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Select;
use Laravel\Nova\Fields\Status;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\Textarea;
use Maatwebsite\LaravelNovaExcel\Actions\DownloadExcel;

class Report extends Resource {

  public static $model = 'App\Models\Report';
  public static $group = 'Resources';
  public static $title = 'id';
  public static $search = ['id'];

  public function actions(Request $request) {
    return [
        (new DownloadExcel)
            ->withHeadings(),
    ];
  }

  public function filters(Request $request)
  {
    return [
        new Filters\ReportStatus(),
        new Filters\ReportEvent(),
    ];
  }

  public function fields(Request $request) {
    return [
        ID::make()->sortable(),

        BelongsTo::make('User')
            ->sortable()
            ->size('w-1/2'),

        BelongsTo::make('Topic')
            ->sortable()
            ->size('w-1/2'),

        Text::make('Title', 'name')
//            ->displayUsing(function ($value) {
//              return substr($value, 0, 20);
//            })
            ->sortable()
            ->size('w-1/2'),

        BelongsTo::make('Event')
            ->sortable()
            ->hideFromIndex()
            ->size('w-1/2'),

        Select::make('Status')->options([
            1 => 'Pending',
            2 => 'Deny',
            3 => 'Approve',
        ])
            ->displayUsing(function ($q){
              switch ($q){
                case 1:
                  return "Pending";
                  break;
                case 2:
                  return "Denied";
                  break;
                default:
                  return "Approved";
                  break;
              }
            })
            ->sortable()
            ->size('w-1/2'),

        File::make('File')
            ->hideFromIndex()
            ->disk('reports')
            ->size('w-1/2'),

        Textarea::make('Description')
            ->hideFromIndex()
            ->size('w-1/2'),

        DateTime::make('Created At')
            ->sortable()
            ->size('w-1/2'),

        DateTime::make('Updated At')
            ->sortable()
            ->hideFromIndex()
            ->size('w-1/2'),

    ];
  }

}
