<?php

namespace Maatwebsite\LaravelNovaExcel\Actions;

use Illuminate\Support\Facades\URL;
use Laravel\Nova\Actions\Action;
use Laravel\Nova\Http\Requests\ActionRequest;
use Maatwebsite\Excel\Facades\Excel;
use Symfony\Component\HttpFoundation\BinaryFileResponse;

class DownloadExcel extends ExportToExcel {
  /**
   * Get the displayable name of the action.
   *
   * @return string
   */
  public function name() {
    return __('Download Excel');
  }

  /**
   * @param ActionRequest $request
   * @param Action $exportable
   *
   * @return array
   */
  public function handle(ActionRequest $request, Action $exportable): array {

    $temp = array(
        0 => "ID",
        1 => "user_id",
        2 => "event_id",
        3 => "topic_id",
        4 => "Title",
        5 => "description",
        6 => "Status",
        7 => "file",
        8 => "Created At",
        9 => "updated_at",
    );

    if ($exportable->headings == $temp) {
      $exportable->headings[0] = "ID";
      $exportable->headings[1] = "User";
      $exportable->headings[2] = "Event";
      $exportable->headings[3] = "Topic";
      $exportable->headings[4] = "Title";
      $exportable->headings[5] = "Desc.";
      $exportable->headings[6] = "Status";
      $exportable->headings[7] = "File";
      $exportable->headings[8] = "Created At";
      $exportable->headings[9] = "Updated At";
    }

    $response = Excel::download(
        $exportable,
        $this->getFilename(),
        $this->getWriterType()
    );


    if (!$response instanceof BinaryFileResponse || $response->isInvalid()) {
      return \is_callable($this->onFailure)
          ? ($this->onFailure)([$request], $response)
          : Action::danger(__('Resource could not be exported.'));
    }

    return \is_callable($this->onSuccess)
        ? ($this->onSuccess)($request, $response)
        : Action::download(
            $this->getDownloadUrl($response),
            $this->getFilename()
        );
  }

  /**
   * @param BinaryFileResponse $response
   *
   * @return string
   */
  protected function getDownloadUrl(BinaryFileResponse $response): string {
    return URL::temporarySignedRoute('laravel-nova-excel.download', now()->addMinutes(1), [
        'path' => encrypt($response->getFile()->getPathname()),
        'filename' => $this->getFilename(),
    ]);
  }
}
