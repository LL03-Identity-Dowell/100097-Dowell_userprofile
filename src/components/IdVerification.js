import React from 'react'
import {Form, Button} from 'react-bootstrap'
const IdVerification = () => {
  return (
    <div>
      <p className="myProfile text-white fw-bold text-center">06. ID Verification Status by AI</p>
      <Form className='p-4'>
        <Form.Label className='labelsStyle'>Phone number verification using OTP</Form.Label>
        <div className='mb-3 d-flex gap-2'>
          <Form.Check
              name='PhoneNumerVerification'
              type="radio"
              id="phone1"
              label="Not Started"
              className='radioText'
            />
            <Form.Check
              name='PhoneNumerVerification'
              type="radio"
              id="phone2"
              label="In Progress"
              className='radioText'
            />
            <Form.Check
              name='PhoneNumerVerification'
              type="radio"
              id="phone3"
              className='radioText'
              label="Accepted After Verification"
            />
            <Form.Check
              name='PhoneNumerVerification'
              type="radio"
              id="phone4"
              label="Rejected After Verification"
              className='radioText'
            />
        </div>

        {/* email verification using otp  */}
        <Form.Label className='labelsStyle'>Email verification using OTP</Form.Label>
        <div className='mb-3 d-flex gap-2'>
          <Form.Check
              name='emailVerification'
              type="radio"
              id="email1"
              label="Not Started"
              className='radioText'
            />
            <Form.Check
              name='emailVerification'
              type="radio"
              id="email2"
              label="In Progress"
              className='radioText'
            />
            <Form.Check
              name='emailVerification'
              type="radio"
              id="email3"
              className='radioText'
              label="Accepted After Verification"
            />
            <Form.Check
              name='emailVerification'
              type="radio"
              id="email4"
              label="Rejected After Verification"
              className='radioText'
            />
        </div>
        {/* voice id verification  */}
        <Form.Label className='labelsStyle'>Voice ID verification using OTP</Form.Label>
        <div className='mb-3 d-flex gap-2'>
          <Form.Check
              name='voiceIDVerification'
              type="radio"
              id="voice1"
              label="Not Started"
              className='radioText'
            />
            <Form.Check
              name='voiceIDVerification'
              type="radio"
              id="voice2"
              label="In Progress"
              className='radioText'
            />
            <Form.Check
              name='voiceIDVerification'
              type="radio"
              id="voice3"
              className='radioText'
              label="Accepted After Verification"
            />
            <Form.Check
              name='voiceIDVerification'
              type="radio"
              id="voice4"
              label="Rejected After Verification"
              className='radioText'
            />
        </div>
         {/* Face id verification  */}
         <Form.Label className='labelsStyle'>Face ID verification</Form.Label>
        <div className='mb-3 d-flex gap-2'>
          <Form.Check
              name='faceIDVerification'
              type="radio"
              id="face1"
              label="Not Started"
              className='radioText'
            />
            <Form.Check
              name='faceIDVerification'
              type="radio"
              id="face2"
              label="In Progress"
              className='radioText'
            />
            <Form.Check
              name='faceIDVerification'
              type="radio"
              id="face3"
              className='radioText'
              label="Accepted After Verification"
            />
            <Form.Check
              name='faceIDVerification'
              type="radio"
              id="face4"
              label="Rejected After Verification"
              className='radioText'
            />
        </div>

        {/* biometric id verification  */}
        <Form.Label className='labelsStyle'>Biometric ID verification</Form.Label>
        <div className='mb-3 d-flex gap-2'>
          <Form.Check
              name='biometricVerification'
              type="radio"
              id="bioMetric1"
              label="Not Started"
              className='radioText'
            />
            <Form.Check
              name='biometricVerification'
              type="radio"
              id="bioMetric2"
              label="In Progress"
              className='radioText'
            />
            <Form.Check
              name='biometricVerification'
              type="radio"
              id="bioMetric3"
              className='radioText'
              label="Accepted After Verification"
            />
            <Form.Check
              name='biometricVerification'
              type="radio"
              id="bioMetric4"
              label="Rejected After Verification"
              className='radioText'
            />
        </div>
        {/* Video id verification  */}
        <Form.Label className='labelsStyle'>Video ID verification</Form.Label>
        <div className='mb-3 d-flex gap-2'>
          <Form.Check
              name='videoIDVerification'
              type="radio"
              id="videoId1"
              label="Not Started"
              className='radioText'
            />
            <Form.Check
              name='videoIDVerification'
              type="radio"
              id="videoId2"
              label="In Progress"
              className='radioText'
            />
            <Form.Check
              name='videoIDVerification'
              type="radio"
              id="videoId3"
              className='radioText'
              label="Accepted After Verification"
            />
            <Form.Check
              name='videoIDVerification'
              type="radio"
              id="videoId4"
              label="Rejected After Verification"
              className='radioText'
            />
        </div>
        {/* ID Card 1 verification  */}
        <Form.Label className='labelsStyle'>ID Card 1 verification</Form.Label>
        <div className='mb-3 d-flex gap-2'>
          <Form.Check
              name='idCard1Verification'
              type="radio"
              id="idcard1-1"
              label="Not Started"
              className='radioText'
            />
            <Form.Check
              name='idCard1Verification'
              type="radio"
              id="idcard1-2"
              label="In Progress"
              className='radioText'
            />
            <Form.Check
              name='idCard1Verification'
              type="radio"
              id="idcard1-3"
              className='radioText'
              label="Accepted After Verification"
            />
            <Form.Check
              name='idCard1Verification'
              type="radio"
              id="idcard1-4"
              label="Rejected After Verification"
              className='radioText'
            />
        </div>
           {/* ID Card 2 verification  */}
           <Form.Label className='labelsStyle'>ID Card 2 verification</Form.Label>
        <div className='mb-3 d-flex gap-2'>
          <Form.Check
              name='idCard2Verification'
              type="radio"
              id="idcard2-1"
              label="Not Started"
              className='radioText'
            />
            <Form.Check
              name='idCard2Verification'
              type="radio"
              id="idcard2-2"
              label="In Progress"
              className='radioText'
            />
            <Form.Check
              name='idCard2Verification'
              type="radio"
              id="idcard2-3"
              className='radioText'
              label="Accepted After Verification"
            />
            <Form.Check
              name='idCard2Verification'
              type="radio"
              id="idcard2-4"
              label="Rejected After Verification"
              className='radioText'
            />
        </div>
           {/* ID Card 3 verification  */}
           <Form.Label className='labelsStyle'>ID Card 3 verification</Form.Label>
        <div className='mb-3 d-flex gap-2'>
          <Form.Check
              name='idCard3Verification'
              type="radio"
              id="idcard3-1"
              label="Not Started"
              className='radioText'
            />
            <Form.Check
              name='idCard3Verification'
              type="radio"
              id="idcard3-2"
              label="In Progress"
              className='radioText'
            />
            <Form.Check
              name='idCard3Verification'
              type="radio"
              id="idcard3-3"
              className='radioText'
              label="Accepted After Verification"
            />
            <Form.Check
              name='idCard3Verification'
              type="radio"
              id="idcard3-4"
              label="Rejected After Verification"
              className='radioText'
            />
        </div>
           {/* ID Card 4 verification  */}
           <Form.Label className='labelsStyle'>ID Card 4 verification</Form.Label>
        <div className='mb-3 d-flex gap-2'>
          <Form.Check
              name='idCard4Verification'
              type="radio"
              id="idcard4-1"
              label="Not Started"
              className='radioText'
            />
            <Form.Check
              name='idCard4Verification'
              type="radio"
              id="idcard4-2"
              label="In Progress"
              className='radioText'
            />
            <Form.Check
              name='idCard4Verification'
              type="radio"
              id="idcard4-3"
              className='radioText'
              label="Accepted After Verification"
            />
            <Form.Check
              name='idCard4Verification'
              type="radio"
              id="idcard4-4"
              label="Rejected After Verification"
              className='radioText'
            />
        </div>
           {/* ID Card 5 verification  */}
           <Form.Label className='labelsStyle'>ID Card 5 verification</Form.Label>
        <div className='mb-3 d-flex gap-2'>
          <Form.Check
              name='idCard5Verification'
              type="radio"
              id="idcard5-1"
              label="Not Started"
              className='radioText'
            />
            <Form.Check
              name='idCard5Verification'
              type="radio"
              id="idcard5-2"
              label="In Progress"
              className='radioText'
            />
            <Form.Check
              name='idCard5Verification'
              type="radio"
              id="idcard5-3"
              className='radioText'
              label="Accepted After Verification"
            />
            <Form.Check
              name='idCard5Verification'
              type="radio"
              id="idcard5-4"
              label="Rejected After Verification"
              className='radioText'
            />
        </div>
        {/* Signature verification  */}
        <Form.Label className='labelsStyle'>Signature verification</Form.Label>
        <div className='mb-3 d-flex gap-2'>
          <Form.Check
              name='SignatureVerification'
              type="radio"
              id="sign1"
              label="Not Started"
              className='radioText'
            />
            <Form.Check
              name='SignatureVerification'
              type="radio"
              id="sign2"
              label="In Progress"
              className='radioText'
            />
            <Form.Check
              name='SignatureVerification'
              type="radio"
              id="sign3"
              className='radioText'
              label="Accepted After Verification"
            />
            <Form.Check
              name='SignatureVerification'
              type="radio"
              id="sign4"
              label="Rejected After Verification"
              className='radioText'
            />
        </div>
        {/* Socialmedia profile verification */}
        <Form.Label className='labelsStyle'>Socialmedia profile verification</Form.Label>
        <div className='mb-3 d-flex gap-2'>
          <Form.Check
              name='socialMediaVerifcation'
              type="radio"
              id="socailMedia1"
              label="Not Started"
              className='radioText'
            />
            <Form.Check
              name='socialMediaVerifcation'
              type="radio"
              id="socailMedia2"
              label="In Progress"
              className='radioText'
            />
            <Form.Check
              name='socialMediaVerifcation'
              type="radio"
              id="socailMedia3"
              className='radioText'
              label="Accepted After Verification"
            />
            <Form.Check
              name='socialMediaVerifcation'
              type="radio"
              id="socailMedia4"
              label="Rejected After Verification"
              className='radioText'
            />
        </div>
        {/*Personal reference verification  */}
        <Form.Label className='labelsStyle'>Personal reference verification</Form.Label>
        <div className='mb-3 d-flex gap-2'>
          <Form.Check
              name='personalReferences'
              type="radio"
              id="personal1"
              label="Not Started"
              className='radioText'
            />
            <Form.Check
              name='personalReferences'
              type="radio"
              id="personal2"
              label="In Progress"
              className='radioText'
            />
            <Form.Check
              name='personalReferences'
              type="radio"
              id="personal3"
              className='radioText'
              label="Accepted After Verification"
            />
            <Form.Check
              name='personalReferences'
              type="radio"
              id="personal4"
              label="Rejected After Verification"
              className='radioText'
            />
        </div>
        {/* Personal verification by witness  */}
        <Form.Label className='labelsStyle'>Personal verification by witness</Form.Label>
        <div className='mb-3 d-flex gap-2'>
          <Form.Check
              name='witnessVerification'
              type="radio"
              id="witness1"
              label="Not Started"
              className='radioText'
            />
            <Form.Check
              name='witnessVerification'
              type="radio"
              id="witness2"
              label="In Progress"
              className='radioText'
            />
            <Form.Check
              name='witnessVerification'
              type="radio"
              id="witness3"
              className='radioText'
              label="Accepted After Verification"
            />
            <Form.Check
              name='witnessVerification'
              type="radio"
              id="witness4"
              label="Rejected After Verification"
              className='radioText'
            />
        </div>
        {/* Organisation verification  */}
        <Form.Label className='labelsStyle'>Organisation verification</Form.Label>
        <div className='mb-3 d-flex gap-2'>
          <Form.Check
              name='orgVerification'
              type="radio"
              id="org1"
              label="Not Started"
              className='radioText'
            />
            <Form.Check
              name='orgVerification'
              type="radio"
              id="org2"
              label="In Progress"
              className='radioText'
            />
            <Form.Check
              name='orgVerification'
              type="radio"
              id="org3"
              className='radioText'
              label="Accepted After Verification"
            />
            <Form.Check
              name='orgVerification'
              type="radio"
              id="org4"
              label="Rejected After Verification"
              className='radioText'
            />
        </div>
        <Button variant="dark" className='w-100 btn mb-3'>Update</Button>
    </Form>
    </div>
  )
}

export default IdVerification
