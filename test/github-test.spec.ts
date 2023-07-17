// import { Test, TestingModule } from '@nestjs/testing';
import { Octokit }  from 'octokit'
import { writeFile }    from 'fs';

const octokit: Octokit = new Octokit({
  'auth': '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'
})

async function getContents(): Promise<any> {
  console.log('getContents')
  //   octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
  //     owner: 'ass3027',
  //     repo: 'test',
  //     path: '/',
  //     headers: {
  //       'X-GitHub-Api-Version': '2022-11-28'
  //     }
  //   }).then( res =>{
  //     console.log('suc')
  //     return res.data
  //   }).catch( err =>{
  //     console.log('err')
  //     return err
  //   })
  let result
  try{
    result = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
      owner: 'ass3027',
      repo: 'test',
      path: '/',
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    })
  } catch(err)  {
    result = err
  }
  return result
}

async function saveFile(target: any){
  console.log(target)
  writeFile('/result/result.html',target ,err => {
    console.log(1)
    if (err) {
      // console.error(err)
    }
  })
}

describe('github test', () => {

  test('connection test', async () => {
    const result = await getContents()

    expect(result).not.toBeNull()

    await saveFile(result)
    // console.log(result);

  })

})