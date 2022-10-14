<?php
include_once('controller/config.php');
if(isset($_POST["do"])&&($_POST["do"]=="add_grade")){

	$name=$_POST["name"]; 
	$admission_fee=$_POST["admission_fee"];
	$hall_charge=$_POST["hall_charge"];
	
	$sql1="SELECT * FROM grade WHERE name='$name'";	
	$result1=mysqli_query($conn,$sql1);
	$row1=mysqli_fetch_assoc($result1);
	
	$name1=$row1['name'];
	$msg=0;
	$grade_id="";

	if($name == $name1){
		$msg+=1;

	}else{

		$sql="INSERT INTO grade (name,admission_fee,hall_charge) 
      		  VALUES ( '".$name."','".$admission_fee."','".$hall_charge."')";
	  
	 	if(mysqli_query($conn,$sql)){
			
	  		$msg+=2;  

			$sql2="SELECT * FROM grade WHERE name='$name'";
			$result2=mysqli_query($conn,$sql2);
			$row2=mysqli_fetch_assoc($result2);
			$grade_id=$row2['id'];
			
	  	}else{
		  $msg+=3;  
		  
	  	}
	
	}
	
header("Location: view/grade.php?do=alert_from_insert&msg=$msg&grade=$grade_id");

}
?>

