import {View, Text, Button, Image, TextInput, Pressable} from 'react-native';
import React, {useState} from 'react';
import {
  BtnContainer,
  EntryLabel,
  EntryView,
  InputText,
  Header,
  SubmitBtn,
  BtnText,
} from './SetPassword.styles';
import {PassBtnIcon, PassToggle} from '../../assets/images';
import UserTopTab from '../../components/UserTopTab/UserTopTab';
import MenuHeader from '../../components/MenuHeader/MenuHeader';
import SafeAreaViewContainer from '../../components/SafeAreaViewContainer/SafeAreaViewContainer';
import {Formik} from 'formik';
import * as Yup from 'yup';
import PassValidatorIndicator from '../../components/PassValidatorIndicator/PassValidatorIndicator';

const SetPassword = ({navigation}) => {
  const validationState = {
    'Lower case letter': false,
    'Upper case letter': false,
    'Minimum 8 characters': false,
    'Number ': false,
    'Special character': false,
  };
  const [passValidation, setPassValidation] = useState(validationState);
  const [InputHighlight, setInputHighlight] = useState(false);
  const [InputHighlight2, setInputHighlight2] = useState(false);
  const [pass1Visible, setPass1Visible] = useState(true);
  const [pass2Visible, setPass2Visible] = useState(true);

  // const logError = e => {
  //   const newValidation = passValidation;
  //   if (String(e.regex) === String(/\w*[a-z]\w*/)) {
  //     newValidation['Lower case letter'] = false;
  //   } else {
  //     newValidation['Lower case letter'] = true;
  //   }

  //   setPassValidation(newValidation);
  // };

  const SignupSchema = Yup.object().shape({
    pass1: Yup.string()
      .matches(/\w*[a-z]\w*/)
      .matches(/\w*[A-Z]\w*/)
      .matches(/\d/)
      .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/)
      .min(8)
      .required()
      .test('test', 'pass test', function (value) {
        if (!value) {
          setPassValidation(validationState);
          return false;
        }
        var newValidState = passValidation;
        if (/\w*[a-z]\w*/.test(value)) {
          newValidState['Lower case letter'] = true;
        } else {
          newValidState['Lower case letter'] = false;
        }
        if (/\w*[A-Z]\w*/.test(value)) {
          newValidState['Upper case letter'] = true;
        } else {
          newValidState['Upper case letter'] = false;
        }
        if (/\d/.test(value)) {
          newValidState['Number '] = true;
        } else {
          newValidState['Number '] = false;
        }
        if (/[!@#$%^&*()\-_"=+{}; :,<.>]/.test(value)) {
          newValidState['Special character'] = true;
        } else {
          newValidState['Special character'] = false;
        }
        if (value.length >= 8) {
          newValidState['Minimum 8 characters'] = true;
        } else {
          newValidState['Minimum 8 characters'] = false;
        }
        setPassValidation(newValidState);
        return true;
      }),

    pass2: Yup.string()
      .oneOf([Yup.ref('pass1')], 'Passwords do not match')
      .required(),
  });

  // const handlePassChange = text => {
  //   setPassValue(text);
  //   const regx = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  //   console.log(regx.test(text));
  // };

  const validatorGenerator = () => {
    const res = [];
    for (let entry in passValidation) {
      res.push(
        <PassValidatorIndicator
          key={entry}
          label={entry}
          validState={passValidation[entry]}
        />,
      );
    }
    return res;
  };

  return (
    <SafeAreaViewContainer>
      <MenuHeader navigation={navigation} />
      <Header>Set your password</Header>
      <EntryLabel light>
        Enter a strong password for your online banking account
      </EntryLabel>
      <Formik
        validationSchema={SignupSchema}
        initialValues={{pass1: '', pass2: ''}}
        onSubmit={() => navigation.navigate('SignUpSuccess')}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <>
            <BtnContainer border={InputHighlight}>
              <Image source={PassBtnIcon} />
              <EntryView>
                <EntryLabel highlight={InputHighlight}>Password</EntryLabel>

                <InputText
                  name="pass1"
                  secureTextEntry={pass1Visible}
                  placeholderTextColor="rgba(183, 183, 183, 1)"
                  selectionColor="rgba(18, 167, 89, 1)"
                  placeholder="Enter your password"
                  placeholderColor="rgba(183, 183, 183, 1)"
                  onFocus={() => setInputHighlight(true)}
                  onEndEditing={() => setInputHighlight(false)}
                  value={values.pass1}
                  editable
                  onChangeText={handleChange('pass1')}
                />
              </EntryView>
              <Pressable
                onPress={() => setPass1Visible(!pass1Visible)}
                style={{marginTop: 'auto'}}>
                <Image source={PassToggle} />
              </Pressable>
            </BtnContainer>
            {/* {errors.pass1 && (
              <Text style={{fontSize: 10, color: 'red'}}>{errors.pass1}</Text>
            )} */}

            <BtnContainer border={InputHighlight2}>
              <Image source={PassBtnIcon} />
              <EntryView>
                <EntryLabel highlight={InputHighlight2}>
                  Confirm Password
                </EntryLabel>
                <InputText
                  name="pass2"
                  secureTextEntry={pass2Visible}
                  placeholderTextColor="rgba(183, 183, 183, 1)"
                  selectionColor="rgba(18, 167, 89, 1)"
                  placeholder="Re-Write your password here"
                  placeholderColor="rgba(183, 183, 183, 1)"
                  onFocus={() => setInputHighlight2(true)}
                  onEndEditing={() => setInputHighlight2(false)}
                  value={values.pass2}
                  editable
                  onChangeText={handleChange('pass2')}
                />
              </EntryView>
              <Pressable
                onPress={() => setPass2Visible(!pass2Visible)}
                style={{marginTop: 'auto'}}>
                <Image source={PassToggle} />
              </Pressable>
            </BtnContainer>
            {/* {errors.pass2 && (
              <Text style={{fontSize: 10, color: 'red'}}>{errors.pass2}</Text>
            )} */}
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
              }}>
              {validatorGenerator()}
            </View>
            <SubmitBtn disabled={!isValid} onPress={handleSubmit}>
              <BtnText>Submit</BtnText>
            </SubmitBtn>
          </>
        )}
      </Formik>
    </SafeAreaViewContainer>
  );
};

export default SetPassword;
