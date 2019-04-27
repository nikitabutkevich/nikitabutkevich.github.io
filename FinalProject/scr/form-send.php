<script>
    var tokenPost = localStorage.getItem('tokenPost');
    $.POST('token' = tokenPost);
</script>

<?
    $xmlDoc = new DOMDocument(); 
    $buttonNode = $xmlDoc->getElementById( "user-button-send-post" );
    $textAreaNode = $xmlDoc->getElementById( "send-new-post" );
    $nameID = $searchNode->getAttribute('name');
    $textAreaValue = $searchNode->getAttribute('value');
    $token = $_POST['token'];

    if ($_POST) {
        $to = 'https://api.vk.com/method/wall.post?&owner_id=' + $nameID + '&message=' + $textAreaValue + '&v=5.52&access_token=' + $token;
    }
?>