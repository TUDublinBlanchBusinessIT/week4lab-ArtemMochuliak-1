import { SafeAreaView, Text, View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import {useState} from 'react';

export default function App() {
  const gradePoints = {'F': 0,'D': 1.5,'C': 2,'C+': 2.75, 'B': 3, 'B+': 3.5,  'A': 4 };
  
  const [sswd, setSswd] = useState('D');
  const [ob, setOb] = useState('D');
  

  const [mobileApps, setMobileApps] = useState('D');
  const [digitalMarketing, setDigitalMarketing] = useState('D');
  const [oooad, setOooad] = useState('D');
  const [financialManagement, setFinancialManagement] = useState('D');

  var gpa=0;
  var credits=5;
  var totalPossibleCredits = 30;
  var totalGradeScores = 0;
  
  function clickMe(){
    let totalGradeScores = 0;
    alert("this is the click me button"); //alert for web
    Alert.alert("this is the click me button"); //alert for phone
    //get the studnet's gradePointsfor SSWD, multiply it by the credits 
    //add the result to totalGradeScores as an accumulator variable (e.g. tgs=tgs+sswd)
    const sswd_gradeInput = sswd.toUpperCase();
    let sswdGradePoint = gradePoints[sswd_gradeInput];

    

    const sswd_weightedScore = sswdGradePoint * credits;            
    totalGradeScores = totalGradeScores + sswd_weightedScore;  

    

    const mobileAppsGradePoint = gradePoints[mobileApps.toUpperCase()]
    
    const mobileapps_weightedScore = mobileAppsGradePoint * credits;    
    totalGradeScores = totalGradeScores + mobileapps_weightedScore

    const digitalMarketingGradePoint = gradePoints[digitalMarketing.toUpperCase()]

    const marketing_weightedScore = digitalMarketingGradePoint  * credits;    
    totalGradeScores = totalGradeScores + marketing_weightedScore


    const oooadGradePoint = gradePoints[oooad.toUpperCase()]

    const oooad_weightedScore = oooadGradePoint  * credits;    
    totalGradeScores = totalGradeScores + oooad_weightedScore
    

    const financialManagementGradePoint = gradePoints[financialManagement.toUpperCase()]

    const financialManagement_weightedScore =  financialManagementGradePoint  * credits;    
    totalGradeScores = totalGradeScores + financialManagement_weightedScore

  

    
    
    
    //get the student's gradePointsfor Ob, multiply it by the credits
    //add the result to totalGradeScores as an accumulator variable (e.g. tgs=tgs+ob)
    const ob_gradeInput = ob.toUpperCase();
    let obGradePoint = gradePoints[ob_gradeInput];

   

    const ob_weightedScore = obGradePoint * credits;            
    totalGradeScores = totalGradeScores + ob_weightedScore;  

   




    //calculate the gpa as the totalsGradeScores divided by the totalPossibleCredits
    //Output the calculated GPA result to the user using an alert (you must concatenate the gpa)
    gpa = totalGradeScores / totalPossibleCredits;
    Alert.alert("Your GPA is: " + gpa.toFixed(2));
  }

  const styles = StyleSheet.create({
    container: {
      padding: "5%",               
    },
    row: {
      flexDirection: 'row',       
      alignItems: 'center',       
      marginBottom: "5%",        
    },
    label: {
      flex: 1,                    
      marginRight: "5%",          
      fontWeight: 'bold',        
    },
    textInput: {
      flex: 1,                    
      borderWidth: 1,             
      borderColor: '#ccc',       
      padding: 10,                
      borderRadius: 5,            
    }
  });
return (
   <SafeAreaView style={styles.container}>
    <View>
      <Text style={{fontWeight: "bold", fontSize: 24, textAlign:"center", marginBottom: "10%"}}>GPA Calculator</Text>
    </View>

    <View style={styles.row}>
      <Text style={styles.label}>SSWD</Text>
      <TextInput  
        style={styles.textInput}
        placeholder="Grade" 
        onChangeText={setSswd}
        autoCapitalize="characters" 
        maxLength={2}                
      />
    </View>

    <View style={styles.row}>
      <Text style={styles.label}>Organisational Behaviour</Text>
      <TextInput 
        style={styles.textInput}
        placeholder="Grade" 
        onChangeText={setOb}
        autoCapitalize="characters"
        maxLength={2}
      />
    </View>

    

    <View style={styles.row}>
  <Text style={styles.label}>Mobile Apps</Text>
  <TextInput
    style={styles.textInput}
    placeholder="Grade"
    onChangeText={setMobileApps}
    autoCapitalize="characters"
    maxLength={2}
  />
</View>

<View style={styles.row}>
  <Text style={styles.label}>Digital Marketing</Text>
  <TextInput
    style={styles.textInput}
    placeholder="Grade"
    onChangeText={setDigitalMarketing}
    autoCapitalize="characters"
    maxLength={2}
  />
</View>

<View style={styles.row}>
  <Text style={styles.label}>OOAD</Text>
  <TextInput
    style={styles.textInput}
    placeholder="Grade"
    onChangeText={setOooad}
    autoCapitalize="characters"
    maxLength={2}
  />
</View>

<View style={styles.row}>
  <Text style={styles.label}>Financial Management</Text>
  <TextInput
    style={styles.textInput}
    placeholder="Grade"
    onChangeText={setFinancialManagement}
    autoCapitalize="characters"
    maxLength={2}
  />
</View>

<View style={{marginTop: "5%"}}>
      <Button title="submit" onPress={clickMe}/>
    </View>
  </SafeAreaView>
  );
}