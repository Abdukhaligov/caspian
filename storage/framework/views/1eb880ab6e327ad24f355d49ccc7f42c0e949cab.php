<?php if ($paginator->hasPages()): ?>
  <div class="pagination">
    <ul>

      <?php if ($paginator->onFirstPage()): ?>
        <li class="disabled" aria-disabled="true"
            aria-label="<?php echo app('translator')->get('pagination.previous'); ?>">
          <a  aria-hidden="true">&lsaquo;</a>
        </li>
      <?php else: ?>
        <li>
          <a  href="<?php echo e($paginator->previousPageUrl()); ?>" rel="prev"
             aria-label="<?php echo app('translator')->get('pagination.previous'); ?>">&lsaquo;</a>
        </li>
      <?php endif; ?>


      <?php $__currentLoopData = $elements;
      $__env->addLoop($__currentLoopData);
      foreach ($__currentLoopData as $element): $__env->incrementLoopIndices();
        $loop = $__env->getLastLoop(); ?>

        <?php if (is_string($element)): ?>
          <li class="active disabled" aria-disabled="true">
            <a><?php echo e($element); ?></a>
          </li>
        <?php endif; ?>


        <?php if (is_array($element)): ?>
          <?php $__currentLoopData = $element;
          $__env->addLoop($__currentLoopData);
          foreach ($__currentLoopData as $page => $url): $__env->incrementLoopIndices();
            $loop = $__env->getLastLoop(); ?>
            <?php if ($page == $paginator->currentPage()): ?>
              <li class="active" aria-current="page"><a ><?php echo e($page); ?></a>
              </li>
            <?php else: ?>
              <li ><a  href="<?php echo e($url); ?>"><?php echo e($page); ?></a></li>
            <?php endif; ?>
          <?php endforeach;
          $__env->popLoop();
          $loop = $__env->getLastLoop(); ?>
        <?php endif; ?>
      <?php endforeach;
      $__env->popLoop();
      $loop = $__env->getLastLoop(); ?>


      <?php if ($paginator->hasMorePages()): ?>
        <li >
          <a  href="<?php echo e($paginator->nextPageUrl()); ?>" rel="next"
             aria-label="<?php echo app('translator')->get('pagination.next'); ?>">&rsaquo;</a>
        </li>
      <?php else: ?>
        <li class="disabled" aria-disabled="true"
            aria-label="<?php echo app('translator')->get('pagination.next'); ?>">
          <span  aria-hidden="true">&rsaquo;</span>
        </li>
      <?php endif; ?>
    </ul>
  </div>
<?php endif; ?>
<?php /**PATH D:\WebProjects\caspian\vendor\laravel\framework\src\Illuminate\Pagination/resources/views/bootstrap-4.blade.php ENDPATH**/ ?>