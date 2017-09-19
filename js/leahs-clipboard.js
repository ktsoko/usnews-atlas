var clipboard = new Clipboard('.color-bar');
    clipboard.on('success', function(e) {
        console.info('Action:', e.action);
        console.info('Text:', e.text);
        console.info('Trigger:', e.trigger);

        $(".notification").html("Copied");
        $(".color-bar").mouseout(function(){
          $(".notification").html("Copy");
        });
        e.clearSelection();
    });
    clipboard.on('error', function(e) {
        console.error('Action:', e.action);
        console.error('Trigger:', e.trigger);

        $(".notification").html('Press "Ctrl + C" to copy');
        $(".color-bar").mouseout(function(){
          $(".notification").html("Copy");
        });
    });