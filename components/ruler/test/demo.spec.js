import Demo0 from './cases/demo0'
import Demo1 from './cases/demo1'
import Demo2 from './cases/demo2'
import {renderToString} from '@vue/server-test-utils'

describe('Radio', () => {
  test(`Basic`, () => {
    expect(renderToString(Demo0)).toMatchSnapshot()
  })
  test(`With Field`, () => {
    expect(renderToString(Demo1)).toMatchSnapshot()
  })
  test(`List`, () => {
    expect(renderToString(Demo2)).toMatchSnapshot()
  })
})
